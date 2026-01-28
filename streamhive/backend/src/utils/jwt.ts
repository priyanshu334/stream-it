import jwt from "jsonwebtoken"
import { Config } from "../config"


export const SignInAccessToken = (userId: string) => {
  return jwt.sign({ userId }, Config.jwtSecret, { expiresIn: "15m" })
}

export const signRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, Config.jwtSecret, { expiresIn: "7d" })
}

export const VerifyToken = (token: string) => {
  return jwt.verify(token, Config.jwtSecret) as { userId: string }

}
