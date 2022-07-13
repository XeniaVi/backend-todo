import {
  IAddTodo,
  IGetDBTodo,
  IPrepareTodo,
  IUpdateTodo,
} from "../types/types";
import Todo from "../models/Todo";
import { prepareTodoObject } from "../helpers/helper";
import querystring from "querystring";
//import { ErrorWrongData } from "../errors/errors.js";

class TodoService {
  static async add(todo: IAddTodo) {
    const newTodo: IGetDBTodo = await Todo.create(todo);
    return prepareTodoObject(newTodo);
  }

  static async getByFilter(completed: boolean, offset: number, limit: number) {
    const query = !completed ? {} : { completed };
    const count = await Todo.countDocuments(query);
    let todos: Array<IGetDBTodo> | Array<IPrepareTodo> = await Todo.find(query)
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);
    todos = todos.map((todo: IGetDBTodo) => {
      const newTodo: IPrepareTodo = prepareTodoObject(todo);
      return newTodo;
    });
    return { count, todos };
  }

  static async update(post: IUpdateTodo, id: string) {
    //if (!id) throw new ErrorWrongData("Post doesn't exist");
    if (!id) throw new Error("Post doesn't exist");
    const updateTodo = await Todo.findByIdAndUpdate(id, post, {
      new: true,
    });

    return prepareTodoObject(updateTodo);
  }

  //   static async updateSome(completed, ids) {
  //     await Todo.updateMany(
  //       {
  //         _id: { $in: ids },
  //       },
  //       { $set: { completed } }
  //     );

  //     let updatedTodos = await Todo.find({
  //       _id: { $in: ids },
  //     });

  //     updatedTodos = updatedTodos.map((todo) => {
  //       todo = prepareTodoObject(todo);
  //       return todo;
  //     });
  //     return updatedTodos;
  //   }

  //   static async delete(id) {
  //     if (!id) throw new ErrorWrongData("Post doesn't exist");
  //     const todo = await Todo.findByIdAndDelete(id);
  //     return todo;
  //   }

  //   static async deleteSome(ids) {
  //     const response = await Todo.deleteMany({
  //       _id: { $in: ids },
  //     });
  //     return response;
  //   }
}

export default TodoService;
