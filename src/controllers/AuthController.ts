import { Request, Response, NextFunction, response } from "express";
import AuthService from "../services/AuthService";

class AuthController {
  static async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      const response = await AuthService.registration(username, password);
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
}

export default AuthController;
