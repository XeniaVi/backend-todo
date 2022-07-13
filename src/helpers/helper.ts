import { IGetDBTodo } from "../types/types";

export const prepareTodoObject = (item: IGetDBTodo) => {
  //const objectItem = item.toJSON();
  const { _id, value, completed, createdAt } = item;
  return {
    id: _id.toString(),
    value,
    completed,
    createdAt,
  };
};
