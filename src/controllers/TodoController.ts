import TodoService from "../services/TodoService";
import express from "express";

class TodoController {
  static async add(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const todo = await TodoService.add(req.body);
      return res.json(todo);
    } catch (error) {
      next(error);
    }
  }

  // static async getByFilter(
  //   req: express.Request,
  //   res: express.Response,
  //   next: express.NextFunction
  // ) {
  //   try {
  //     const { offset, limit, completed } = req.query;
  //     const todos = await TodoService.getByFilter(completed, offset, limit);
  //     return res.json(todos);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // static async update(
  //   req: express.Request,
  //   res: express.Response,
  //   next: express.NextFunction
  // ) {
  //   const post = req.body;
  //   const { id } = req.params;

  //   try {
  //     const todo = await TodoService.update(post, id);
  //     return res.json(todo);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // static async updateSome(
  //   req: express.Request,
  //   res: express.Response,
  //   next: express.NextFunction
  // ) {
  //   const { completed, ids } = req.body;
  //   try {
  //     const todos = await TodoService.updateSome(completed, ids);
  //     return res.json(todos);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // static async delete(
  //   req: express.Request,
  //   res: express.Response,
  //   next: express.NextFunction
  // ) {
  //   const { id } = req.params;
  //   try {
  //     const todo = await TodoService.delete(id);
  //     return res.json(todo);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // static async deleteSome(
  //   req: express.Request,
  //   res: express.Response,
  //   next: express.NextFunction
  // ) {
  //   const { ids } = req.body;
  //   try {
  //     const response = await TodoService.deleteSome(ids);
  //     return res.json(response);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

export default TodoController;
