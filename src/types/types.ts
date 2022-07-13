import { Types } from "mongoose";

export interface IAddTodo {
  value: string;
  completed: boolean;
  createdAt: number;
}

export interface IUpdateTodo {
  value?: string;
  completed?: boolean;
}

export interface IGetDBTodo {
  _id: Types.ObjectId;
  value: string;
  completed: boolean;
  createdAt: number;
  __v?: number;
}

export interface IPrepareTodo {
  id: string;
  value: string;
  completed: boolean;
  createdAt: number;
}
