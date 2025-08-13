import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/_utils/dbConnect'
import User from '@/models/User'
import bcrypt from 'bcryptjs'
import { signToken } from '@/app/api/_utils/jwt'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    await dbConnect()
    const user = await User.findOne({ email })
    if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    const ok = await bcrypt.compare(password, user.password)
    if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    const token = signToken({ id: user._id, email: user.email })
    return NextResponse.json({ token, user: { id: user._id, username: user.username, email: user.email } })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}


// import { NextRequest, NextResponse } from 'next/server'
// import dbConnect from '@/lib/dbConnect'
// import User from '@/models/User'
// import bcrypt from 'bcryptjs'

// export async function POST(req: NextRequest) {
//   try {
//     const { email, password } = await req.json()
//     if (!email || !password) {
//       return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
//     }

//     await dbConnect()

//     const user = await User.findOne({ email })
//     if (!user) {
//       return NextResponse.json({ error: 'Invalid credentialsssdr' }, { status: 401 })
//     }

//     const isMatch = await bcrypt.compare(password, user.password)
//     if (!isMatch) {
//       return NextResponse.json({ error: 'Paswrod do not match' }, { status: 401 })
//     }

//     // No JWT token here, just return user info
//     return NextResponse.json({ user: { id: user._id, username: user.username, email: user.email } })
//   } catch (error) {
//     console.error(error)
//     return NextResponse.json({ error: 'Server error' }, { status: 500 })
//   }
// }




// // import { NextRequest, NextResponse } from 'next/server'
// // import dbConnect from '@/lib/dbConnect'
// // import User from '@/models/User'
// // import bcrypt from 'bcryptjs'
// // import { signToken } from '@/lib/jwt'

// // export async function POST(req: NextRequest) {
// //   try {
// //     const { email, password } = await req.json()
// //     if (!email || !password) {
// //       return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
// //     }

// //     await dbConnect()

// //     const user = await User.findOne({ email })
// //     if (!user) {
// //       return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
// //     }

// //     const isMatch = await bcrypt.compare(password, user.password)
// //     if (!isMatch) {
// //       return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
// //     }

// //     const token = signToken({ id: user._id, email: user.email })

// //     return NextResponse.json({ token, user: { id: user._id, username: user.username, email: user.email } })
// //   } catch (error) {
// //     console.error(error)
// //     return NextResponse.json({ error: 'Server error' }, { status: 500 })
// //   }
// // }
