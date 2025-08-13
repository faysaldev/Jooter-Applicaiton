import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI as string
if (!MONGO_URI) throw new Error('MONGO_URI is not set')

let cached: any = (global as any)._mongoose
if (!cached) cached = (global as any)._mongoose = { conn: null, promise: null }

export default async function dbConnect() {
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((m) => m)
  }
  cached.conn = await cached.promise
  return cached.conn
}
