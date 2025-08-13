import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/_utils/dbConnect'
import Item from '@/models/Item'
import User from '@/models/User'
import { requireAuth } from '@/app/api/_utils/auth'
import { logActivity } from '@/app/api/_utils/activities'

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const auth = requireAuth(req)
  // @ts-ignore
  if (auth instanceof Response) return auth
  const userId = (auth as any).id
  await dbConnect()
  const item:any = await Item.findOne({ _id: params.id, owner: userId })
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  // If folder: also delete children (shallow for simplicity)
  if (item.type === 'folder') {
    const children = await Item.find({ owner: userId, parentFolder: item._id })
    let freed = 0
    for (const ch of children) { freed += ch.size; await ch.deleteOne() }
    const user = await User.findById(userId)
    if (user) { user.storageUsedBytes = Math.max(0, user.storageUsedBytes - freed); await user.save() }
  }

  const freedBytes = item.size
  await item.deleteOne()

  if (freedBytes > 0) {
    const user = await User.findById(userId)
    if (user) { user.storageUsedBytes = Math.max(0, user.storageUsedBytes - freedBytes); await user.save() }
  }

  await logActivity(userId, 'delete', params.id)
  return NextResponse.json({ message: 'Deleted' })
}