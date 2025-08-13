import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/_utils/dbConnect'
import User from '@/models/User'
import { requireAuth } from '@/app/api/_utils/auth'

export async function POST(req: NextRequest) {
  const auth = requireAuth(req)
  // @ts-ignore
  if (auth instanceof Response) return auth
  const { username } = await req.json()
  if (!username) return NextResponse.json({ error: 'username required' }, { status: 400 })
  await dbConnect()
  const user = await User.findByIdAndUpdate((auth as any).id, { username }, { new: true }).select('username email')
  return NextResponse.json({ user })
}
