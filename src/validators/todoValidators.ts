import { ErrorWrongData } from "../errors/errors";
import { Request, Response, NextFunction } from "express";

export const validateNewTodo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { value, completed } = req.body;

  if (!value || typeof value !== "string" || typeof completed !== "boolean") {
    next(new ErrorWrongData("Invalid value!"));
    return;
  }

  next();
};

export const validateUpdateTodo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { value, completed } = req.body;

  if (value === undefined && completed === undefined) {
    next(new ErrorWrongData("Invalid value!"));
    return;
  }

  if (value && (typeof value !== "string" || !value.length)) {
    next(new ErrorWrongData("Invalid value!"));
    return;
  }

  if (completed && typeof completed !== "boolean") {
    next(new ErrorWrongData("Invalid value!"));
    return;
  }

  next();
};
