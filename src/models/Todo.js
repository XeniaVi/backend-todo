import mongoose from "mongoose";

const Todo = new mongoose.Schema({
  value: { type: String, required: true },
  completed: { type: Boolean, required: true },
  timestamp: { type: Number, required: true },
});

export default mongoose.model("Todo", Todo);
