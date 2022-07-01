import Todo from "../models/Todo.js";
import { prepareTodoObject } from "../helpers/helper.js";

class TodoService {
  static async add(todo) {
    const newTodo = await Todo.create(todo);
    return newTodo;
  }

  static async getAll() {
    let todos = await Todo.find();
    todos = todos.map((todo) => {
      todo = prepareTodoObject(todo);
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

  static async updateAll(completed) {
    await Todo.updateMany(
      {
        _id: { $in: ["62bc5631612e0459b1d68df3", "62bc5632612e0459b1d68df5"] },
      },
      { $set: { completed } }
    );
    let updatedTodos = await Todo.find({
      _id: { $in: ["62bc5631612e0459b1d68df3", "62bc5632612e0459b1d68df5"] },
    });
    updatedTodos = updatedTodos.map((todo) => {
      todo = prepareTodoObject(todo);
      return todo;
    });
    return updatedTodos;
  }

  static async delete(id) {
    if (!id) throw new Error("Id doesn't exist");
    const todo = await Todo.findByIdAndDelete(id);
    return todo;
  }
}

export default TodoService;
