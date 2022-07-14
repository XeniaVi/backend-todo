import { ErrorWrongData } from "../errors";
import { Request, Response, NextFunction } from "express";

export const validateRegistration = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;

  if (!username) {
    next(new ErrorWrongData("Username must not be empty"));
  }

  const min = 4;
  const max = 15;

  if (password.length < min || password.length > max) {
    next(
      new ErrorWrongData(
        "Password's length must be more than 4 and less than 15"
      )
    );
  }

  next();
};
