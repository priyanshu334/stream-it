import mongoose from "mongoose"
import { Config } from "."
import { logger } from "../logger/logger";



export const ConnectToDB = async () => {
  try {
    await mongoose.connect(Config.mongoUri);
    logger.info("MongoDB connected");

  } catch (err) {
    logger.error("MongoDB connection failed");
    process.exit(1)
  }
}
