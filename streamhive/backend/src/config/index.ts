import z from "zod";

const envSchema = z.object({
  PORT: z.string().default("4000"),
  MONGO_URI: z.string(),
  JWT_SECRET: z.string(),
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  console.error("Invalid enviroment variables",)
  process.exit(1)

}

export const Config = {
  port: Number(parsed.data.PORT),
  mongoUri: parsed.data.MONGO_URI,
  jwtSecret: parsed.data.JWT_SECRET
}
