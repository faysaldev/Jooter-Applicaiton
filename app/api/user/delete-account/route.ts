import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/_utils/dbConnect'
import User from '@/models/User'
import Item from '@/models/Item'
import Activity from '@/models/Activity'
import { requireAuth } from '@/app/api/_utils/auth'

export async function DELETE(req: NextRequest) {
  const auth = requireAuth(req)
  // @ts-ignore
  if (auth instanceof Response) return auth
  const userId = (auth as any).id
  await dbConnect()
  await Promise.all([
    Item.deleteMany({ owner: userId }),
    Activity.deleteMany({ user: userId }),
    User.deleteOne({ _id: userId })
  ])
  return NextResponse.json({ message: 'Account and all data deleted' })
}