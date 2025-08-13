import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/_utils/dbConnect'
import User from '@/models/User'
import bcrypt from 'bcryptjs'
import { requireAuth } from '@/app/api/_utils/auth'

export async function POST(req: NextRequest) {
  const auth = requireAuth(req)
  // @ts-ignore
  if (auth instanceof Response) return auth
  const { currentPassword, newPassword } = await req.json()
  if (!currentPassword || !newPassword) return NextResponse.json({ error: 'Both passwords required' }, { status: 400 })
  await dbConnect()
  const user = await User.findById((auth as any).id)
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })
  const ok = await bcrypt.compare(currentPassword, (user as any).password)
  if (!ok) return NextResponse.json({ error: 'Invalid current password' }, { status: 401 })
  ;(user as any).password = await bcrypt.hash(newPassword, 12)
  await user.save()
  return NextResponse.json({ message: 'Password updated' })
}
