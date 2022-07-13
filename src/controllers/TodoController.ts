import TodoService from "../services/TodoService";
import { Request, Response, NextFunction } from "express";

class TodoController {
  static async add(req: Request, res: Response, next: NextFunction) {
    try {
      const todo = await TodoService.add(req.body);
      return res.json(todo);
    } catch (error) {
      next(error);
    }
  }

  static async getByFilter(req: Request, res: Response, next: NextFunction) {
    try {
      const { offset, limit, completed } = req.query;
      const todos = await TodoService.getByFilter(
        completed as unknown as boolean,
        offset as unknown as number,
        limit as unknown as number
      );
      return res.json(todos);
    } catch (error) {
      next(error);
    }
  }

  // static async update(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
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
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
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
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
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
