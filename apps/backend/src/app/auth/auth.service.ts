import { JwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";

import { JwtPayload } from "@observer/data";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(): Promise<string> {
    const user: JwtPayload = { token: "" };

    return this.jwtService.sign(user);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.userService.findOneByToken(payload.token);
  }
}
