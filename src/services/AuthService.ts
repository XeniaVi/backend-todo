import Role from "../models/Role";

class AuthService {
  static async registration() {}

  static async makeRole(role: string) {
    const newRole = new Role({ value: role });
    await newRole.save();
    return {};
  }
}

export default AuthService;
