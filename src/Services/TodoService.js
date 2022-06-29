import Todo from "../Schemes/Todo.js";

class TodoService {
  static async add(todo) {
    const newTodo = await Todo.create(todo);
    return newTodo;
  }

  static async getAll() {
    const todos = await Todo.find();
    return todos;
  }
}

export default TodoService;
