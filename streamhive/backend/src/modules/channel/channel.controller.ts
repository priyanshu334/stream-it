import { success } from "zod";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { Channel } from "./channel.model";
import { Response, Request } from "express";
import { AppError } from "../../errors/AppError";
export class ChannelController {
  static async GetMyChannel(req: AuthRequest, res: Response) {
    const channel = await Channel.findOne({ owner: req.userId })

    if (!channel) {
      throw new AppError(404, "Channel not found")
    }
    res.json({
      success: true,
      data: channel
    })
  }

  static async GetChannelById(req: Request, res: Response) {
    const channel = await Channel.findById(req.params.id).populate(
      "owner",
      "name avatar"
    )
    if (!channel) {
      throw new AppError(404, "Channel not found")

    }
    res.json({
      success: true,
      data: channel
    })
  }
}
