import TodoService from "../services/TodoService.js";

class TodoController {
  static async add(req, res) {
    try {
      const todo = await TodoService.add(req.body);
      return res.json(todo);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getAll(req, res) {
    try {
      const { offset, limit, completed } = req.query;
      const todos = await TodoService.getAll(completed, offset, limit);
      return res.json(todos);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async update(req, res) {
    const post = req.body;
    const { id } = req.params;

    try {
      const todo = await TodoService.update(post, id);
      return res.json(todo);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async updateSome(req, res) {
    const { completed, ids } = req.body;
    try {
      const todos = await TodoService.updateSome(completed, ids);
      return res.json(todos);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      const todo = await TodoService.delete(id);
      return res.json(todo);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async deleteSome(req, res) {
    const { ids } = req.body;
    try {
      const response = await TodoService.deleteSome(ids);
      return res.json(response);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default TodoController;
