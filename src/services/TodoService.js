import Todo from "../models/Todo.js";
import { prepareTodoObject } from "../helpers/helper.js";

class TodoService {
  static async add(todo) {
    const newTodo = await Todo.create(todo);
    return prepareTodoObject(newTodo);
  }

  static async getAll() {
    let todos = await Todo.find();
    todos = todos.map((todo) => {
      todo = prepareTodoObject(todo);
      return todo;
    });
    return todos;
  }

  static async update(value, id) {
    if (!id) throw new Error("Id doesn't exist");
    let post = {};
    switch (typeof value) {
      case "string": {
        post = { value };
        break;
      }
      case "boolean": {
        post = { completed: value };
        break;
      }
      default: {
        post = {};
      }
    }

    const updateTodo = await Todo.findByIdAndUpdate(id, post, {
      new: true,
    });

    return prepareTodoObject(updateTodo);
  }

  static async updateSome(completed, ids) {
    await Todo.updateMany(
      {
        _id: { $in: ids },
      },
      { $set: { completed } }
    );

    let updatedTodos = await Todo.find({
      _id: { $in: ids },
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

  static async deleteSome(condition) {
    const response = await Todo.deleteMany(condition);
    return response;
  }
}

export default TodoService;
