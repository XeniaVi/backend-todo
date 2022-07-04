import { Router } from "express";
import TodoController from "../controllers/TodoController.js";
import {
  validateNewTodo,
  validateUpdateTodo,
} from "../validators/todoValidators.js";

const router = new Router();

router.post("/todos", validateNewTodo, TodoController.add);
router.get("/todos", TodoController.getAll);
router.put("/todos/:id", validateUpdateTodo, TodoController.update);
router.put("/todos", TodoController.updateSome);
router.delete("/todos/:id", TodoController.delete);
router.delete("/todos/", TodoController.deleteSome);

export default router;
