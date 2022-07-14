import { Router } from "express";
import AuthController from "../controllers/AuthController";

const router = Router();

router.post("/registration", AuthController.registration);
router.post("/role", AuthController.makeRole);
router.get("/users", AuthController.getUsers);
router.get("/roles", AuthController.getRoles);

export default router;
