import { Request, Response, NextFunction } from "express";
import AuthService from "../services/AuthService";
import Role from "../models/Role";
import User from "../models/User";

class AuthController {
  static async registration(req: Request, res: Response, next: NextFunction) {
    try {
      return res.json({});
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
