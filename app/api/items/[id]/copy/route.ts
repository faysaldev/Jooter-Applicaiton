import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/_utils/dbConnect'
import Item from '@/models/Item'
import User from '@/models/User'
import { requireAuth } from '@/app/api/_utils/auth'
import { logActivity } from '@/app/api/_utils/activities'

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const auth = requireAuth(req)
  // @ts-ignore
  if (auth instanceof Response) return auth
  const userId = (auth as any).id
  await dbConnect()

  const { targetFolder = null, newName } = await req.json()
  const src:any = await Item.findOne({ _id: params.id, owner: userId })
  if (!src) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const copyName = newName || `Copy of ${src.name}`
  const duplicate:any = await Item.create({
    owner: src.owner,
    name: copyName,
    type: src.type,
    size: src.size,
    url: src.url,
    noteContent: src.noteContent,
    parentFolder: targetFolder,
  })

  // Update storage only if file (not folder)
  if (src.type !== 'folder' && src.size > 0) {
    const user = await User.findById(userId)
    if (user) {
      const future = user.storageUsedBytes + src.size
      if (future > user.planLimitBytes) return NextResponse.json({ error: 'Storage limit exceeded' }, { status: 403 })
      user.storageUsedBytes = future
      await user.save()
    }
  }

  await logActivity(userId, 'copy', duplicate._id.toString(), { from: src._id.toString() })
  return NextResponse.json({ item: duplicate })
}
