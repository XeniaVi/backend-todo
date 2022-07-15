import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  value: { type: String, unique: true, default: true },
});

export const Role = mongoose.model("Role", RoleSchema);
