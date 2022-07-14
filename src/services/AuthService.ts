import Role from "../models/Role";
import User from "../models/User";
import { ErrorWrongData } from "../errors/errors";
import bcript from "bcryptjs";

class AuthService {
  static async registration(username: string, password: string) {
    const res = await User.findOne({ username });

    if (res) throw new ErrorWrongData("User already exists");

    const hashPassword = bcript.hashSync(password, 7);
    const userRole = await Role.findOne({ value: "USER" });

    if (userRole) throw new ErrorWrongData("Unabled to create user");

    const user = new User({ username, password: hashPassword, roles: [] });
    await user.save();

    return { message: "User successfully created" };
  }

  static async makeRole(role: string) {
    const newRole = new Role({ value: role });
    await newRole.save();
    return {};
  }
}

export default AuthService;
