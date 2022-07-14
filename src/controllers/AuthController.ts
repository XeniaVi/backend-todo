import { Request, Response, NextFunction, response } from "express";
import AuthService from "../services/AuthService";
import { validationResult } from "express-validator";
import { ErrorWrongData } from "../errors/errors";

class AuthController {
  static async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) throw new ErrorWrongData("Error registration");

      const { username, password } = req.body;
      const response = await AuthService.registration(username, password);
      return res.json(response);
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      const response = await AuthService.login(username, password);
      return res.json(response);
    } catch (error) {
      next(error);
    }
  }

  static async makeRole(req: Request, res: Response, next: NextFunction) {
    try {
      const { role } = req.body;
      const response = await AuthService.makeRole(role.toUpperCase());
      return res.json(response);
    } catch (error) {
      next(error);
    }
  }

  static async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await AuthService.getUsers();
      return res.json(response);
    } catch (error) {
      next(error);
    }
  }

  static async getRoles(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await AuthService.getRoles();
      return res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
