import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

import { AuthStrategy } from "./auth.strategy";
import { AuthService } from "./auth.service";
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secretOrPrivateKey: process.env.JWT_SECRET_KEY || "secretKey",
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN || "1 month"
      }
    }),
    UserModule
  ],
  providers: [AuthService],
  exports: [PassportModule, AuthService]
})
export class AuthModule {}
