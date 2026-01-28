import express from "express"
import cors from "cors"
import { AppError } from "./errors/AppError"
import { errorHandler } from "./errors/errorHandler"


export const app = express()

app.use(cors())
app.use(express.json())

app.use("/health", (req, res) => {
  res.json({ status: "is working sir " })
})

app.get("/error", () => {
  throw new AppError(400, "Test error working")
})

app.use(errorHandler)
