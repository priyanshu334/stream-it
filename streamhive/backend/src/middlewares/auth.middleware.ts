import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { VerifyToken } from "../utils/jwt";

export interface AuthRequest extends Request {
  userId?: string;
}

export default function AuthMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AppError(401, "Unauthorized")

  }

  const token = authHeader.split(" ")[1];
  const payload = VerifyToken(token);

  req.userId = payload.userId;
  next();
}
