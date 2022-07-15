import { Router } from "express";
import { AuthMiddleware } from "../middleware";
import { TodoController } from "../controllers";
import { validateNewTodo, validateUpdateTodo } from "../validators";

export const todoRouter = Router();

todoRouter.post("/todos", AuthMiddleware, validateNewTodo, TodoController.add);
todoRouter.get("/todos", AuthMiddleware, TodoController.getByFilter);
todoRouter.put(
  "/todos/:id",
  AuthMiddleware,
  validateUpdateTodo,
  TodoController.update
);
todoRouter.put("/todos", AuthMiddleware, TodoController.updateSome);
todoRouter.delete("/todos/:id", AuthMiddleware, TodoController.delete);
todoRouter.delete("/todos/", AuthMiddleware, TodoController.deleteSome);
