import { app } from "./app";
import { Config } from "./config";
import { ConnectToDB } from "./config/db";
import { logger } from "./logger/logger";

const PORT = 4000;

const server = app.listen(Config.port, async () => {
  await ConnectToDB()
  logger.info("App is running")

})

process.on("SIGINT", async () => {
  logger.warn("SIGINT received shutting down");
  await server.close();
  process.exit(0);
})
