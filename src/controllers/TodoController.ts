//import TodoService from "../services/TodoService.js";
import express from "express";

class TodoController {
  static async add(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      //const todo = await TodoService.add(req.body);
      const todo: string = "add";
      return res.json(todo);
    } catch (error) {
      next(error);
    }
  }

  static async getByFilter(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const { offset, limit, completed } = req.query;
      //const todos = await TodoService.getByFilter(completed, offset, limit);
      const todos: string = "getByFilter";
      return res.json(todos);
    } catch (error) {
      next(error);
    }
  }

  static async update(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const post = req.body;
    const { id } = req.params;

    try {
      //const todo = await TodoService.update(post, id);
      const todo: string = "update";
      return res.json(todo);
    } catch (error) {
      next(error);
    }
  }

  static async updateSome(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { completed, ids } = req.body;
    try {
      //const todos = await TodoService.updateSome(completed, ids);
      const todos: string = "updateSome";
      return res.json(todos);
    } catch (error) {
      next(error);
    }
  }

  static async delete(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { id } = req.params;
    try {
      //const todo = await TodoService.delete(id);
      const todo: string = "delete";
      return res.json(todo);
    } catch (error) {
      next(error);
    }
  }

  static async deleteSome(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { ids } = req.body;
    try {
      //const response = await TodoService.deleteSome(ids);
      const response: string = "deleteSome";
      return res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

export default TodoController;
