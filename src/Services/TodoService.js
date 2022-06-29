import Todo from "../Schemes/Todo.js";

class TodoService {
  static async add(todo) {
    const newTodo = await Todo.create(todo);
    return newTodo;
  }
}

export default TodoService;
