import { Types } from "mongoose";
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

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
  __v?: number;
};

export interface UserExtendedRequest extends Request {
  user: JwtPayload | string;
}

export type PayloadForGenerateToken = {
  id?: string;
  username?: string;
};
