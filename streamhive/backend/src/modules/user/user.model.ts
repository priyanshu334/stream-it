import { Schema, model } from "mongoose";


export interface IUser {
  email: string;
  password: string;
  name: string;
  avatar?: string;
  isVerified: boolean;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    avatar: String,
    isVerified: { type: Boolean, default: false },

  },
  { timestamps: true }
)

export const User = model<IUser>("User", userSchema)

