import { Router } from "express";
import AuthController from "../controllers/AuthController";

const router = Router();

router.post("/registration", AuthController.registration);
router.post("/role", AuthController.makeRole);

export default router;
