import { app } from "./app";
import { logger } from "./logger/logger";

const PORT = 4000;

app.listen(PORT, () => {
  logger.info("app running")
})
