import { Router } from "express";
import { AuthController } from "../controllers";
import {
  validateRegistration,
} from "../validators";

const router = Router();

router.post(
  "/registration",
  validateRegistration,
  AuthController.registration
);
router.post("/login", AuthController.login);

export default router;
