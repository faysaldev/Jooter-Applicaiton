import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/_utils/dbConnect'
import User from '@/models/User'
import { requireAuth } from '@/app/api/_utils/auth'

export async function GET(req: NextRequest) {
  const auth = requireAuth(req)
  // @ts-ignore
  if (auth instanceof Response) return auth
  await dbConnect()
  const user = await User.findById((auth as any).id).select('username email storageUsedBytes planLimitBytes createdAt updatedAt')
  return NextResponse.json({ user })
}