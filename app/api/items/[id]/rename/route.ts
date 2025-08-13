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
  const { name } = await req.json()
  if (!name) return NextResponse.json({ error: 'Name required' }, { status: 400 })
  await dbConnect()
  const item:any = await Item.findOneAndUpdate({ _id: params.id, owner: userId }, { name }, { new: true })
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  await logActivity(userId, 'rename', item._id.toString(), { name })
  return NextResponse.json({ item })
}