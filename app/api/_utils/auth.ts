import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from './jwt'

export function getAuthUser(req: NextRequest) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.substring(7) : null
  if (!token) return null
  try {
    const payload = verifyToken(token)
    return payload
  } catch (e) {
    return null
  }
}

export function requireAuth(req: NextRequest) {
  const user = getAuthUser(req)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  return user
}