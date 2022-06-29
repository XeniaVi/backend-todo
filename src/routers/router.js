import { Router } from "express";
import TodoController from "../Controllers/TodoController.js";

const router = new Router();

router.post("/todos", TodoController.add);
router.get("/todos", TodoController.getAll);
router.put("/todos", TodoController.update);

export default router;
