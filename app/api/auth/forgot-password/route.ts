import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import dbConnect from '@/app/api/_utils/dbConnect'
import User from '@/models/User'
import sendEmail from '@/lib/sendEmail'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email) return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    await dbConnect()
    const user = await User.findOne({ email })
    if (!user) return NextResponse.json({ message: 'If registered, a reset email will be sent' })

    const resetToken = crypto.randomBytes(32).toString('hex')
    const expires = new Date(Date.now() + 60 * 60 * 1000)
    ;(user as any).resetPasswordToken = resetToken
    ;(user as any).resetPasswordExpires = expires
    await user.save()

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}&email=${encodeURIComponent(email)}`
    await sendEmail({ to: email, subject: 'Password Reset', html: `<p>Reset password: <a href="${resetUrl}">Click here</a></p>` })
    return NextResponse.json({ message: 'If registered, a reset email will be sent' })
  } catch (e) { console.error(e); return NextResponse.json({ error: 'Server error' }, { status: 500 }) }
}