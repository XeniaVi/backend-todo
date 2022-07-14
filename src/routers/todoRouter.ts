import { Router } from "express";
import { AuthMiddleware } from "../middleware/AuthMiddleware";
import TodoController from "../controllers/TodoController";
import {
  validateNewTodo,
  validateUpdateTodo,
} from "../validators/todoValidators";

const router = Router();

router.post("/todos", AuthMiddleware, validateNewTodo, TodoController.add);
router.get("/todos", AuthMiddleware, TodoController.getByFilter);
router.put(
  "/todos/:id",
  AuthMiddleware,
  validateUpdateTodo,
  TodoController.update
);
router.put("/todos", AuthMiddleware, TodoController.updateSome);
router.delete("/todos/:id", AuthMiddleware, TodoController.delete);
router.delete("/todos/", AuthMiddleware, TodoController.deleteSome);

export default router;
