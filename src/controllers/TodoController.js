import TodoService from "../services/TodoService.js";

class TodoController {
  static async add(req, res, next) {
    try {
      const todo = await TodoService.add(req.body);
      return res.json(todo);
    } catch (error) {
      next(error);
    }
  }

  static async getByFilter(req, res, next) {
    try {
      const { offset, limit, completed } = req.query;
      const todos = await TodoService.getByFilter(completed, offset, limit);
      return res.json(todos);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    const post = req.body;
    const { id } = req.params;

    try {
      const todo = await TodoService.update(post, id);
      return res.json(todo);
    } catch (error) {
      next(error);
    }
  }

  static async updateSome(req, res, next) {
    const { completed, ids } = req.body;
    try {
      const todos = await TodoService.updateSome(completed, ids);
      return res.json(todos);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    const { id } = req.params;
    try {
      const todo = await TodoService.delete(id);
      return res.json(todo);
    } catch (error) {
      next(error);
    }
  }

  static async deleteSome(req, res, next) {
    const { ids } = req.body;
    try {
      const response = await TodoService.deleteSome(ids);
      return res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

export default TodoController;
