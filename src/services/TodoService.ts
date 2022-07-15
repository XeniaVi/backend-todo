import { TodoNew, TodoDB, TodoPrepared, TodoUpdate, UserReq } from "../types";
import { Todo } from "../models";
import { prepareTodoObject } from "../helpers";
import { ErrorWrongData } from "../errors";

export class TodoService {
  static async add(todo: TodoNew) {
    const newTodo: TodoDB = await Todo.create(todo);
    return prepareTodoObject(newTodo);
  }

  static async getByFilter(
    completed: boolean,
    offset: number,
    limit: number,
    user: UserReq
  ) {
    const query = !completed
      ? { user_id: user.id }
      : { completed, user_id: user.id };
    console.log(query);
    const count = await Todo.countDocuments(query);
    let todos: Array<TodoDB> | Array<TodoPrepared> = await Todo.find(query)
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);
    todos = todos.map((todo: TodoDB) => prepareTodoObject(todo));
    return { count, todos };
  }

  static async update(post: TodoUpdate, id: string) {
    if (!id) throw new ErrorWrongData("Post doesn't exist");
    const updateTodo = await Todo.findByIdAndUpdate(id, post, {
      new: true,
    });

    return prepareTodoObject(updateTodo);
  }

  static async updateSome(completed: boolean, ids: Array<string>) {
    await Todo.updateMany(
      {
        _id: { $in: ids },
      },
      { $set: { completed } }
    );

    const updatedTodos: Array<TodoDB> = await Todo.find({
      _id: { $in: ids },
    });

    const todos: Array<TodoPrepared> = updatedTodos.map((todo: TodoDB) =>
      prepareTodoObject(todo)
    );
    return todos;
  }

  static async delete(id: string) {
    if (!id) throw new ErrorWrongData("Post doesn't exist");
    await Todo.findByIdAndDelete(id);
    return {};
  }

  static async deleteSome(ids: Array<string>) {
    const response = await Todo.deleteMany({
      _id: { $in: ids },
    });
    return response;
  }
}

export default TodoService;
