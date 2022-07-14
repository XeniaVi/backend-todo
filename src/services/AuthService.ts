import { Role } from "../models";
import { User } from "../models";
import { ErrorWrongData } from "../errors";
import bcript from "bcryptjs";
import { UserDB } from "../types";
import { prepareUserObject, generateAccessToken } from "../helpers";
import { nextTick } from "process";

class AuthService {
  static async registration(username: string, password: string) {
    try {
      const res = await User.findOne({ username });

      if (res) throw new ErrorWrongData("User already exists");

      const hashPassword = bcript.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" });

      if (!userRole) throw new ErrorWrongData("Unabled to create user");

      const user = new User({
        username,
        password: hashPassword,
      });
      await user.save();

      return { message: "User successfully created" };
    } catch (error) {
      return { message: error.message };
    }
  }

  static async login(username: string, password: string) {
    let users: Array<UserDB> = await User.find({ username });
    const user = prepareUserObject(users[0]);
    if (!user) throw new ErrorWrongData(`User ${username} not found`);

    const validPassword = bcript.compareSync(password, user.password);
    if (!validPassword) throw new ErrorWrongData(`Password is wrong`);

    const payload = {
      id: user.id,
      user: user.username,
    };

    const token = generateAccessToken(payload);
    return { token };
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
