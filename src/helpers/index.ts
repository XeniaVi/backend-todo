import { PayloadForGenerateToken, TodoDB, UserDB } from "../types";
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
  const { _id, username, password } = item;
  return {
    id: _id.toString(),
    username,
    password,
  };
};

export const generateAccessToken = (payload: PayloadForGenerateToken) => {
  return jwt.sign(payload, config.SECRET_KEY, { expiresIn: config.EXPIRES_IN });
};
