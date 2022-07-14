import { Router } from "express";
import AuthController from "../controllers/AuthController";
import { check } from "express-validator";

const router = Router();

router.post(
  "/registration",
  check("username", "Username must not be empty").notEmpty(),
  check(
    "password",
    "Password's length must be more than 4 and less than 15"
  ).isLength({ min: 5, max: 14 }),
  AuthController.registration
);
router.post("/login", AuthController.login);
router.post("/role", AuthController.makeRole);
router.get("/users", AuthController.getUsers);
router.get("/roles", AuthController.getRoles);

export default router;
