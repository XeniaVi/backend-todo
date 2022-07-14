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

    console.log(userRole);

    if (!userRole) throw new ErrorWrongData("Unabled to create user");

    const user = new User({
      username,
      password: hashPassword,
      roles: [userRole],
    });
    await user.save();

    return { message: "User successfully created" };
  }

  static async makeRole(role: string) {
    const newRole = new Role({ value: role });
    await newRole.save();
    return {};
  }

  static async getUsers() {
    const users = await User.find();
    return users;
  }

  static async getRoles() {
    const users = await Role.find();
    return users;
  }
}

export default AuthService;
