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
}

export default TodoController;
