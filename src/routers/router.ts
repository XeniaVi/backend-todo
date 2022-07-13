import { Router } from "express";
//import TodoController from "../controllers/TodoController";
// import {
//   validateNewTodo,
//   validateUpdateTodo,
// } from "../validators/todoValidators.js";

const router = Router();

router.post("/todos" /*validateNewTodo, TodoController.add*/, (req, res) => {
  res.send("post");
});
router.get("/todos" /*TodoController.getByFilter*/, (req, res) => {
  res.send("get");
});
router.put(
  "/todos/:id" /*validateUpdateTodo, TodoController.update*/,
  (req, res) => {
    res.send("put by id");
  }
);
router.put("/todos" /*TodoController.updateSome*/, (req, res) => {
  res.send("put");
});
router.delete("/todos/:id" /*TodoController.delete*/, (req, res) => {
  res.send("delete by id");
});
router.delete("/todos/" /*TodoController.deleteSome*/, (req, res) => {
  res.send("delete by ids");
});

export default router;
