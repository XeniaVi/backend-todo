import Todo from "../models/Todo.js";
import { prepareTodoObject } from "../helpers/helper.js";

class TodoService {
  static async add(todo) {
    const newTodo = await Todo.create(todo);
    return prepareTodoObject(newTodo);
  }

  static async getAll(offset, limit) {
    let todos = await Todo.find().skip(offset).limit(limit);
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

  static async deleteSome(ids) {
    const response = await Todo.deleteMany({
      _id: { $in: ids },
    });
    return response;
  }
}

export default TodoService;
