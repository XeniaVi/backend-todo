import { Router } from "express";
import AuthController from "../controllers/AuthController";
import {
  validateRegistrationUsename,
  validateRegistrationPassword,
} from "../validators/authValidators";

const router = Router();

router.post(
  "/registration",
  validateRegistrationUsename,
  validateRegistrationPassword,
  AuthController.registration
);
router.post("/login", AuthController.login);
router.post("/role", AuthController.makeRole);
router.get("/users", AuthController.getUsers);
router.get("/roles", AuthController.getRoles);

export default router;
