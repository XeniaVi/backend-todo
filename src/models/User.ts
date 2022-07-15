import mongoose from "mongoose";
import { UserNew } from "../types";

const UserSchema = new mongoose.Schema<UserNew>({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export const User = mongoose.model("User", UserSchema);
