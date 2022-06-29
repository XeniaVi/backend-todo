import TodoService from "../Services/TodoService.js";

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
      const todos = await TodoService.getAll();
      return res.json(todos);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async update(req, res) {
    try {
      const todo = await TodoService.update(req.body);
      return res.json(todo);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async delete(req, res) {
    try {
      const todo = await TodoService.delete(req.params.id);
      return res.json(todo);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default TodoController;
