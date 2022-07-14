import { Types } from "mongoose";

export type TodoNew = {
  value: string;
  completed: boolean;
  createdAt: number;
};

export type TodoUpdate = {
  value?: string;
  completed?: boolean;
};

export type TodoDB = {
  _id: Types.ObjectId;
  value: string;
  completed: boolean;
  createdAt: number;
  __v?: number;
};

export type TodoPrepared = {
  id: string;
  value: string;
  completed: boolean;
  createdAt: number;
};

export type UserDB = {
  _id: Types.ObjectId;
  username: string;
  password: string;
  roles?: Array<string>;
  __v?: number;
};
