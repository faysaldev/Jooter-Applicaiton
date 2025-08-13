import { NextRequest, NextResponse } from 'next/server'
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
  const { favorite } = await req.json()
  const item:any = await Item.findOneAndUpdate({ _id: params.id, owner: userId }, { isFavorite: !!favorite }, { new: true })
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  await logActivity(userId, 'favorite', item._id.toString(), { favorite: !!favorite })
  return NextResponse.json({ item })
}
