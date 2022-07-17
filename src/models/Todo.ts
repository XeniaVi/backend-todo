import mongoose from "mongoose";
import { TodoNew } from "../types";

const TodoSchema = new mongoose.Schema<TodoNew>({
  value: { type: String, required: true },
  completed: { type: Boolean, required: true },
  createdAt: { type: Number, required: true },
  user: { type:  mongoose.Schema.Types.ObjectId,  ref: "User" }
});

export const Todo = mongoose.model("Todo", TodoSchema);
