import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserExtendedRequest } from "../types";
import { config } from "../config/config";
import { ErrorWrongData } from "../errors";

export const AuthMiddleware = (
  req: UserExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization
      ? req.headers.authorization.split(" ")[1]
      : 0;
    if (!token) throw new ErrorWrongData("User is not autorized");

    const decodedData = jwt.verify(token, config.SECRET_KEY);

    req.user = decodedData;
    next();
  } catch (error) {
    next(error);
  }
};
