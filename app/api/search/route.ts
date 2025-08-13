import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/_utils/dbConnect'
import Item from '@/models/Item'
import { requireAuth } from '@/app/api/_utils/auth'

export async function GET(req: NextRequest) {
  const auth = requireAuth(req)
  // @ts-ignore
  if (auth instanceof Response) return auth
  await dbConnect()

  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q') || ''
  const type = searchParams.get('type') // folder|note|image|pdf (optional)
  const start = searchParams.get('start') // ISO
  const end = searchParams.get('end') // ISO

  const filter: any = { owner: (auth as any).id }
  if (q) filter.name = { $regex: q, $options: 'i' }
  if (type) filter.type = type
  if (start || end) {
    filter.createdAt = {}
    if (start) filter.createdAt.$gte = new Date(start)
    if (end) filter.createdAt.$lte = new Date(end)
  }

  const items = await Item.find(filter).sort({ updatedAt: -1 })
  return NextResponse.json({ items })
}