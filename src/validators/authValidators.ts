import { ErrorWrongData } from "../errors/errors";
import { Request, Response, NextFunction } from "express";

export const validateRegistrationUsename = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.body;

  if (!username) {
    next(new ErrorWrongData("Username must not be empty"));
  }

  next();
};

export const validateRegistrationPassword = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password } = req.body;

  if (password.length < 4 || password.length > 15) {
    next(
      new ErrorWrongData(
        "Password's length must be more than 4 and less than 15"
      )
    );
  }

  next();
};
