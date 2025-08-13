import mongoose, { Schema, Document, Model, Types } from 'mongoose'

export type ItemType = 'folder' | 'note' | 'image' | 'pdf'

export interface IItem extends Document {
  owner: Types.ObjectId
  name: string
  type: ItemType
  size: number // in bytes (notes: length of content, urls: approximate size from client)
  url?: string // for image/pdf (remote URL)
  noteContent?: string
  parentFolder?: Types.ObjectId | null
  isFavorite: boolean
  isShared: boolean
  shareToken?: string
  deleted: boolean
  createdAt: Date
  updatedAt: Date
  uploadedAt: Date
}

const ItemSchema = new Schema<IItem>({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true, trim: true },
  type: { type: String, enum: ['folder', 'note', 'image', 'pdf'], required: true },
  size: { type: Number, default: 0 },
  url: String,
  noteContent: String,
  parentFolder: { type: Schema.Types.ObjectId, ref: 'Item', default: null },
  isFavorite: { type: Boolean, default: false },
  isShared: { type: Boolean, default: false },
  shareToken: String,
  deleted: { type: Boolean, default: false },
  uploadedAt: { type: Date, default: Date.now },
}, { timestamps: true })

ItemSchema.index({ owner: 1, name: 1 })
ItemSchema.index({ owner: 1, type: 1 })
ItemSchema.index({ shareToken: 1 })

export default (mongoose.models.Item as Model<IItem>) || mongoose.model<IItem>('Item', ItemSchema)
