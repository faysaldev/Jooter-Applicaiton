import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/_utils/dbConnect'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    const { email, token, newPassword, confirmPassword } = await req.json()
    if (!email || !token || !newPassword || !confirmPassword) return NextResponse.json({ error: 'All fields required' }, { status: 400 })
    if (newPassword !== confirmPassword) return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 })
    await dbConnect()
    const user: any = await User.findOne({ email, resetPasswordToken: token, resetPasswordExpires: { $gt: new Date() } })
    if (!user) return NextResponse.json({ error: 'Invalid/expired token' }, { status: 400 })
    user.password = await bcrypt.hash(newPassword, 12)
    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined
    await user.save()
    return NextResponse.json({ message: 'Password reset' })
  } catch (e) { console.error(e); return NextResponse.json({ error: 'Server error' }, { status: 500 }) }
}