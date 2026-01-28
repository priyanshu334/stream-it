import express from "express"
import cors from "cors"
import { AppError } from "./errors/AppError"
import { errorHandler } from "./errors/errorHandler"
import AuthRouter from "./modules/auth/auth.router"
import Channelrouter from "./modules/channel/channel.routes"
import VideoRouter from "./modules/video/video.routes"


export const app = express()

app.use(cors())
app.use(express.json())

app.use("/health", (req, res) => {
  res.json({ status: "is working sir " })
})
app.use("/api/auth", AuthRouter)
app.use("/api/videos", VideoRouter)
app.use("/api/channel", Channelrouter)
app.get("/error", () => {
  throw new AppError(400, "Test error working")
})

app.use(errorHandler)
