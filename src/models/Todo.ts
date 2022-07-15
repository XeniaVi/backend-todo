import mongoose from "mongoose";
import { TodoNew } from "../types";

const TodoSchema = new mongoose.Schema<TodoNew>({
  value: { type: String, required: true },
  completed: { type: Boolean, required: true },
  createdAt: { type: Number, required: true },
  user_id: { type: String, required: true },
});

export const Todo = mongoose.model("Todo", TodoSchema);
