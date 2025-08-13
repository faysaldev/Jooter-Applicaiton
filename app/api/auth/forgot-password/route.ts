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










// import { NextRequest, NextResponse } from 'next/server'
// import dbConnect from '@/lib/dbConnect'
// import User from '@/models/User'
// import bcrypt from 'bcryptjs'

// export async function POST(req: NextRequest) {
//   try {
//     const { email, newPassword, confirmPassword } = await req.json()

//     if (!email || !newPassword || !confirmPassword) {
//       return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
//     }
//     if (newPassword !== confirmPassword) {
//       return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 })
//     }

//     await dbConnect()

//     const user = await User.findOne({ email })
//     if (!user) {
//       return NextResponse.json({ error: 'User not found' }, { status: 404 })
//     }

//     user.password = await bcrypt.hash(newPassword, 12)

//     await user.save()

//     return NextResponse.json({ message: 'Password reset successfully' })
//   } catch (error) {
//     console.error(error)
//     return NextResponse.json({ error: 'Server error' }, { status: 500 })
//   }
// }




// // import { NextRequest, NextResponse } from 'next/server'
// // import dbConnect from '@/lib/dbConnect'
// // import User from '@/models/User'
// // import bcrypt from 'bcryptjs'

// // export async function POST(req: NextRequest) {
// //   try {
// //     const { email, token, newPassword, confirmPassword } = await req.json()

// //     if (!email || !token || !newPassword || !confirmPassword) {
// //       return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
// //     }
// //     if (newPassword !== confirmPassword) {
// //       return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 })
// //     }

// //     await dbConnect()
// //     const user = await User.findOne({
// //       email,
// //       resetPasswordToken: token,
// //       resetPasswordExpires: { $gt: new Date() },
// //     })

// //     if (!user) {
// //       return NextResponse.json({ error: 'Invalid or expired reset token' }, { status: 400 })
// //     }

// //     user.password = await bcrypt.hash(newPassword, 12)
// //     user.resetPasswordToken = undefined
// //     user.resetPasswordExpires = undefined

// //     await user.save()

// //     return NextResponse.json({ message: 'Password reset successfully' })
// //   } catch (error) {
// //     console.error(error)
// //     return NextResponse.json({ error: 'Server error' }, { status: 500 })
// //   }
// // }





// // import { NextRequest, NextResponse } from 'next/server'
// // import crypto from 'crypto'
// // import dbConnect from '@/lib/dbConnect'
// // import User from '@/models/User'
// // import sendEmail from '@/lib/sendEmail'

// // export async function POST(req: NextRequest) {
// //   try {
// //     const { email } = await req.json()
// //     if (!email) {
// //       return NextResponse.json({ error: 'Email is required' }, { status: 400 })
// //     }
// // // 
// //     await dbConnect()
// //     const user = await User.findOne({ email })
// //     if (!user) {
// //       // Return success even if no user (prevent email enumeration)
// //       return NextResponse.json({ message: 'If that email is registered, you will receive a reset link' })
// //     }

// //     const resetToken = crypto.randomBytes(32).toString('hex')
// //     const resetTokenExpires = new Date(Date.now() + 3600000) // 1 hour

// //     user.resetPasswordToken = resetToken
// //     user.resetPasswordExpires = resetTokenExpires
// //     await user.save()

// //     const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}&email=${email}`

// //     const message = `
// //       <p>You requested a password reset</p>
// //       <p>Click this <a href="${resetUrl}">link</a> to reset your password. This link expires in 1 hour.</p>
// //     `

// //     await sendEmail({ to: email, subject: 'Password Reset', html: message })

// //     return NextResponse.json({ message: 'Reset password email sent' })
// //   } catch (error) {
// //     console.error(error)
// //     return NextResponse.json({ error: 'Server error' }, { status: 500 })
// //   }
// // }
