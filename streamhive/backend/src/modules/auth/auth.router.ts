import { Router } from "express";
import { AuthController } from "./auth.controller";


const AuthRouter = Router();

AuthRouter.post("/signup", AuthController.Register)
AuthRouter.post("/login", AuthController.Login)


export default AuthRouter;
