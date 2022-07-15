import { Router } from "express";
import { AuthController } from "../controllers";
import { validateRegistration } from "../validators";

export const authRouter = Router();

authRouter.post(
  "/registration",
  validateRegistration,
  AuthController.registration
);
authRouter.post("/login", AuthController.login);
