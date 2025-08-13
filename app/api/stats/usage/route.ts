import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/_utils/dbConnect'
import Item from '@/models/Item'
import User from '@/models/User'
import { requireAuth } from '@/app/api/_utils/auth'

export async function GET(req: NextRequest) {
  const auth = requireAuth(req)
  // @ts-ignore
  if (auth instanceof Response) return auth
  const userId = (auth as any).id
  await dbConnect()

  const [user, counts] = await Promise.all([
    User.findById(userId),
    Item.aggregate([
      { $match: { owner: new (require('mongoose').Types.ObjectId)(userId) } },
      { $group: {
        _id: '$type',
        totalSize: { $sum: '$size' },
        count: { $sum: 1 }
      }}
    ])
  ])

  const totals: any = { totalSize: 0, totalItems: 0, folders: 0, notes: 0, images: 0, pdfs: 0 }
  for (const c of counts) {
    totals.totalItems += c.count
    totals.totalSize += c.totalSize
    if (c._id === 'folder') totals.folders = c.count
    if (c._id === 'note') totals.notes = c.count
    if (c._id === 'image') totals.images = c.count
    if (c._id === 'pdf') totals.pdfs = c.count
  }

  // Sync user's storageUsedBytes if out of sync
  if (user && user.storageUsedBytes !== totals.totalSize) {
    user.storageUsedBytes = totals.totalSize
    await user.save()
  }

  const limit = user?.planLimitBytes ?? Number(process.env.STORAGE_LIMIT_BYTES)
  const remaining = Math.max(0, Number(limit) - totals.totalSize)

  return NextResponse.json({
    limitBytes: Number(limit),
    usedBytes: totals.totalSize,
    remainingBytes: remaining,
    totals,
  })
}
