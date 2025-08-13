import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/_utils/dbConnect'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    const { username, email, password, confirmPassword } = await req.json()
    if (!username || !email || !password || !confirmPassword) return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    if (password !== confirmPassword) return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 })

    await dbConnect()
    const exists = await User.findOne({ email })
    if (exists) return NextResponse.json({ error: 'Email already registered' }, { status: 400 })

    const hashed = await bcrypt.hash(password, 12)
    const user = await User.create({ username, email, password: hashed })

    return NextResponse.json({ message: 'User created', user: { id: user._id, username, email } })
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
//     const { username, email, password, confirmPassword } = await req.json()

//     if (!username || !email || !password || !confirmPassword) {
//       return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
//     }

//     if (password !== confirmPassword) {
//       return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 })
//     }

//     await dbConnect()

//     const existingUser = await User.findOne({ email })
//     if (existingUser) {
//       return NextResponse.json({ error: 'Email already registered' }, { status: 400 })
//     }

//     const hashedPassword = await bcrypt.hash(password, 12)

//     const user = await User.create({
//       username,
//       email,
//       password: hashedPassword,
//     })

//     return NextResponse.json({ message: 'User created successfully' })
//   } catch (error) {
//     console.error(error)
//     return NextResponse.json({ error: 'Server error' }, { status: 500 })
//   }
// }
