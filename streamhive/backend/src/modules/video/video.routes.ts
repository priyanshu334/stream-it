import { Router } from "express";
import AuthMiddleware from "../../middlewares/auth.middleware";
import { VideoController } from "./video.controller";

const VideoRouter = Router()

VideoRouter.post("/", AuthMiddleware, VideoController.CreateVideo)

export default VideoRouter;
