import mongoose, { Schema, Document, Model, Types } from 'mongoose'

export interface IActivity extends Document {
  user: Types.ObjectId
  action: string // create|update|delete|favorite|copy|rename|duplicate|share|unshare
  item?: Types.ObjectId
  meta: any
  createdAt: Date
}

const ActivitySchema = new Schema<IActivity>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  action: { type: String, required: true },
  item: { type: Schema.Types.ObjectId, ref: 'Item' },
  meta: { type: Schema.Types.Mixed, default: {} },
}, { timestamps: { createdAt: true, updatedAt: false } })

export default (mongoose.models.Activity as Model<IActivity>) || mongoose.model<IActivity>('Activity', ActivitySchema)
