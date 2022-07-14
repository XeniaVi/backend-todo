import { Router } from "express";
import { AuthMiddleware } from "../middleware";
import { TodoController } from "../controllers";
import { validateNewTodo, validateUpdateTodo } from "../validators";

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
