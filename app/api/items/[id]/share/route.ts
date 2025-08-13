import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import dbConnect from '@/app/api/_utils/dbConnect'
import Item from '@/models/Item'
import { requireAuth } from '@/app/api/_utils/auth'
import { logActivity } from '@/app/api/_utils/activities'

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const auth = requireAuth(req)
  // @ts-ignore
  if (auth instanceof Response) return auth
  const userId = (auth as any).id
  await dbConnect()
  const { enable } = await req.json()
  const shareToken = enable ? crypto.randomBytes(12).toString('hex') : undefined
  const item:any = await Item.findOneAndUpdate(
    { _id: params.id, owner: userId },
    { isShared: !!enable, shareToken: enable ? shareToken : undefined },
    { new: true }
  )
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  await logActivity(userId, enable ? 'share' : 'unshare', item._id.toString())
  const shareUrl = enable ? `${process.env.FRONTEND_URL}/share/${item.shareToken}` : null
  return NextResponse.json({ item, shareUrl })
}
