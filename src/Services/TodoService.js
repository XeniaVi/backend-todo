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
