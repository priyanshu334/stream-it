import { AppError } from "../../errors/AppError";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { Channel } from "../channel/channel.model";
import { Video } from "./video.model";
import { CreateVideoSchema } from "./video.schema";
import { Response } from "express"

export class VideoController {
  static async CreateVideo(req: AuthRequest, res: Response) {
    const data = CreateVideoSchema.parse(req.body);

    const channel = await Channel.findOne({ owner: req.userId })
    if (!channel) {
      throw new AppError(404, "channel not found");
    }
    const video = Video.create({
      owner: req.userId,
      channel: channel._id,
      title: data.title,
      description: data.description,
      visiblity: data.visiblity,
      videoPath: "pending",
    })
    res.status(201).json({
      success: true,
      data: video
    })
  }
}
