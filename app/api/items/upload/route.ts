import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/_utils/dbConnect'
import User from '@/models/User'
import Item from '@/models/Item'
import { requireAuth } from '@/app/api/_utils/auth'
import { STORAGE_LIMIT_BYTES } from '@/app/api/_utils/storage'
import { isValidUrl } from '@/app/api/_utils/validators'
import { logActivity } from '@/app/api/_utils/activities'

export async function POST(req: NextRequest) {
  const userOrRes = requireAuth(req)
  // If unauthorized, return the response
  // @ts-ignore
  if (userOrRes instanceof Response) return userOrRes
  const userPayload = userOrRes as { id: string }

  try {
    const body = await req.json()
    const { kind, name, parentFolder = null } = body as any // kind: 'folder' | 'note' | 'image' | 'pdf'

    if (!kind || !name) return NextResponse.json({ error: 'kind and name are required' }, { status: 400 })

    await dbConnect()
    const user:any = await User.findById(userPayload.id)
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    let size = 0; let itemPayload: any = { owner: user._id, name, type: kind, parentFolder }

    if (kind === 'folder') {
      // folders have zero size
    } else if (kind === 'note') {
      const { content = '' } = body
      itemPayload.noteContent = content
      size = Buffer.byteLength(content, 'utf8')
    } else if (kind === 'image' || kind === 'pdf') {
      const { url, sizeBytes = 0 } = body
      if (!url || !isValidUrl(url)) return NextResponse.json({ error: 'Valid url required' }, { status: 400 })
      itemPayload.url = url
      size = Number(sizeBytes || 0)
    } else {
      return NextResponse.json({ error: 'Invalid kind' }, { status: 400 })
    }

    // Check storage limit (notes/images/pdfs count towards storage; folders size=0)
    const futureUsed = Number(user.storageUsedBytes) + Number(size)
    const limit = Number(user.planLimitBytes || STORAGE_LIMIT_BYTES)
    if (futureUsed > limit) return NextResponse.json({ error: 'Storage limit exceeded (15 GB)' }, { status: 403 })

    itemPayload.size = size
    const item:any = await Item.create(itemPayload)

    if (size > 0) {
      user.storageUsedBytes = futureUsed
      await user.save()
    }

    await logActivity(user._id.toString(), 'create', item._id.toString(), { type: kind, name })

    return NextResponse.json({ item })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}