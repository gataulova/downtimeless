import { ExtractJwt, Strategy } from "passport-jwt";
import { AbstractStrategy, PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { JwtPayload } from "@observer/data";

// @ts-ignore
const PassportJwtStrategy: new (...args) => AbstractStrategy &
  Strategy = PassportStrategy(Strategy);

@Injectable()
export class AuthStrategy extends PassportJwtStrategy {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY || "secretKey"
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.authService.validateUser(payload);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
