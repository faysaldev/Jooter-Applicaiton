import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IUser extends Document {
  username: string
  email: string
  password: string
  planLimitBytes: number
  storageUsedBytes: number
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  planLimitBytes: { type: Number, default: Number(process.env.STORAGE_LIMIT_BYTES) || 15 * 1024 * 1024 * 1024 },
  storageUsedBytes: { type: Number, default: 0 },
}, { timestamps: true })

export default (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>('User', UserSchema)




// import mongoose, { Schema, Document, Model } from 'mongoose'

// export interface IUser extends Document {
//   username: string
//   email: string
//   password: string
//   resetPasswordToken?: string
//   resetPasswordExpires?: Date
//   createdAt: Date
//   updatedAt: Date
// }

// const UserSchema: Schema<IUser> = new mongoose.Schema(
//   {
//     username: { type: String, required: true, trim: true, minlength: 3 },
//     email: { type: String, required: true, unique: true, lowercase: true },
//     password: { type: String, required: true },
//     resetPasswordToken: String,
//     resetPasswordExpires: Date,
//   },
//   { timestamps: true }
// )

// const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)

// export default User
