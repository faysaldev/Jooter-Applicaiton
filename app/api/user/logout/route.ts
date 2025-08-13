import { NextResponse } from 'next/server'

export async function POST() {
  // Stateless JWT — client should discard token. If using cookies, clear cookie here.
  return NextResponse.json({ message: 'Logged out' })
}