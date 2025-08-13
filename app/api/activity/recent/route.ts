import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/_utils/dbConnect'
import Activity from '@/models/Activity'
import { requireAuth } from '@/app/api/_utils/auth'

export async function GET(req: NextRequest) {
  const auth = requireAuth(req)
  // @ts-ignore
  if (auth instanceof Response) return auth
  await dbConnect()
  const logs = await Activity.find({ user: (auth as any).id }).sort({ createdAt: -1 }).limit(50)
  return NextResponse.json({ activities: logs })
}