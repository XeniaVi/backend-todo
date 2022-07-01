import { Router } from "express";
import TodoController from "../controllers/TodoController.js";

const router = new Router();

router.post("/todos", TodoController.add);
router.get("/todos", TodoController.getAll);
router.put("/todos/:id", TodoController.update);
router.put("/todos", TodoController.updateAll);
router.delete("/todos/:id", TodoController.delete);

export default router;
