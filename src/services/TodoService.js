import Todo from "../schemas/Todo.js";
import { prepareObject } from "../helpers/helper.js";

class TodoService {
  static async add(todo) {
    const newTodo = await Todo.create(todo);
    return newTodo;
  }

  static async getAll() {
    let todos = await Todo.find();
    todos = todos.map((todo) => {
      todo = prepareObject(todo);
      return todo;
    });
    return todos;
  }

  static async update(post, id) {
    if (!id) throw new Error("Id doesn't exist");
    const updateTodo = await Todo.findByIdAndUpdate(id, post, {
      new: true,
    });
    return updateTodo;
  }

  static async delete(id) {
    if (!id) throw new Error("Id doesn't exist");
    const todo = await Todo.findByIdAndDelete(id);
    return todo;
  }
}

export default TodoService;
