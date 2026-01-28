import { Router } from "express";
import AuthMiddleware from "../../middlewares/auth.middleware";
import { ChannelController } from "./channel.controller";

const Channelrouter = Router()

Channelrouter.get("/me", AuthMiddleware, ChannelController.GetMyChannel)
Channelrouter.get("/:id", ChannelController.GetChannelById)


export default Channelrouter;
