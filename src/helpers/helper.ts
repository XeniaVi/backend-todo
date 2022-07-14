import { TodoDB, UserDB } from "../types/types";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

export const prepareTodoObject = (item: TodoDB) => {
  const { _id, value, completed, createdAt } = item;
  return {
    id: _id.toString(),
    value,
    completed,
    createdAt,
  };
};

export const prepareUserObject = (item: UserDB) => {
  const { _id, username, password, roles } = item;
  return {
    id: _id.toString(),
    username,
    password,
    roles,
  };
};

export const generateAccessToken = (id: string, username: string) => {
  const payload = {
    id,
    username,
  };

  return jwt.sign(payload, config.SECRET_KEY, { expiresIn: "24h" });
};
