import { Schema, Types, model } from "mongoose";

export interface IVideo {
  owner: Types.ObjectId;
  channel: Types.ObjectId;
  title: string;
  description?: string;
  videoPath: string;
  thumbnailPath?: string;
  duration?: number;
  views: number;
  visiblity: "public" | "private" | "unlisted";
}

const VideoSchema = new Schema<IVideo>({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  channel: {
    type: Schema.Types.ObjectId,
    ref: "Channel",
    required: true,
  },
  title: {
    type: String,
    required: true,

  },
  description: {
    type: String,
  },
  videoPath: {
    type: String,
    requried: true,
  },
  duration: Number,
  views: {
    type: Number,
    default: 0,
  },
  visiblity: {
    type: String,
    enum: ["public", "private", "unlisted"],
    default: "public"
  }
},
  { timestamps: true }
)

export const Video = model<IVideo>("Video", VideoSchema)

