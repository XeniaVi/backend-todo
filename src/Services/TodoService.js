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

  static async update(post) {
    if (!post._id) throw new Error("Id doesn't exist");
    const updateTodo = await Todo.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updateTodo;
  }
}

export default TodoService;
