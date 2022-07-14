import { TodoDB } from "../types/types";

export const prepareTodoObject = (item: TodoDB) => {
  const { _id, value, completed, createdAt } = item;
  return {
    id: _id.toString(),
    value,
    completed,
    createdAt,
  };
};
