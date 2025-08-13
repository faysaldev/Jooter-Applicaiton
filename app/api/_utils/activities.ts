import Activity from '@/models/Activity'

export async function logActivity(userId: string, action: string, itemId?: string, meta: any = {}) {
  try {
    await Activity.create({ user: userId, action, item: itemId, meta })
  } catch (e) {
    console.error('Activity log error', e)
  }
}