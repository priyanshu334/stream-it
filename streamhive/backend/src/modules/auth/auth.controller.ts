import { LoginSchema, RegisterSchema } from "./auth.schema";
import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { success } from "zod";

export class AuthController {
  static async Register(req: Request, res: Response) {
    const data = RegisterSchema.parse(req.body);

    const tokens = await AuthService.RegisterUser(data.email, data.password, data.name)
    res.status(200).json({
      success: true,
      data: tokens
    })
  }

  static async Login(req: Request, res: Response) {
    const data = LoginSchema.parse(req.body)
    const tokens = await AuthService.Login(data.email, data.password)
    res.status(200).json({
      success: true,
      data: tokens
    })
  }
}
