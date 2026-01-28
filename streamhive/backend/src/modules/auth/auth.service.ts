import { User } from "../user.model";
import bcrypt from "bcrypt"
import { AppError } from "../../errors/AppError";
import { Channel } from "../channel/channel.model";
import { SignInAccessToken, signRefreshToken } from "../../utils/jwt";
export class AuthService {
  static async RegisterUser(email: string, password: string, name: string) {
    const existing = await User.findOne({ email })
    if (existing) {
      throw new AppError(409, "user already exists");
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashed,
      name
    });

    await Channel.create({
      owner: user._id,
      name: `${name}'s channel`
    })

    return {
      accessToken: SignInAccessToken(user._id.toString()),
      refreshToken: signRefreshToken(user._id.toString()),
    }
  }

  static async Login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new AppError(401, "Invalid credintails")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw new AppError(401, "Invalid password")
    }

    return {
      accessToken: SignInAccessToken(user._id.toString()),
      refreshToken: signRefreshToken(user._id.toString()),
    }
  }
}
