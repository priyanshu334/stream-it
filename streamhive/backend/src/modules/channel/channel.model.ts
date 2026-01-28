import mongoose, { Schema, Types, model } from "mongoose";

export interface Ichannel {
  owner: Types.ObjectId;
  name: string;
  description: string;
  subscribers: number;
}

const ChannelSchema = new Schema<Ichannel>(
  {
    owner: { types: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    description: { type: String },
    subscribers: { types: Number, default: 0 },
  },
  { timestamps: true }
)

export const Channel = model<Ichannel>("Channel", ChannelSchema)
