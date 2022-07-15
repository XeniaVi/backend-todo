import { ErrorWrongData } from "../errors";
import { Request, Response, NextFunction } from "express";
import { minLengthPassword, maxLengthPassword } from "../constants";

export const validateRegistration = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;

  if (!username) {
    next(new ErrorWrongData("Username must not be empty"));
  }

  if (
    password.length < minLengthPassword ||
    password.length > maxLengthPassword
  ) {
    next(
      new ErrorWrongData(
        `Password's length must be more than ${minLengthPassword} and less than ${maxLengthPassword}`
      )
    );
  }

  next();
};
