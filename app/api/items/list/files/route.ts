import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/_utils/dbConnect'
import Item from '@/models/Item'
import { requireAuth } from '@/app/api/_utils/auth'

export async function GET(req: NextRequest) {
  const auth = requireAuth(req)
  // @ts-ignore
  if (auth instanceof Response) return auth
  await dbConnect()
  const items:any = await Item.find({ owner: (auth as any).id, type: { $in: ['note', 'image', 'pdf'] } }).sort({ updatedAt: -1 })
  return NextResponse.json({ items })
}
