import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { getDatabaseOptions } from "@observer/data";
import { AuthModule } from "./auth/auth.module";
import { GroupModule } from "./group/group.module";
import { ProblemModule } from "./problem/problem.module";
import { ServerModule } from "./server/server.module";
import { UserModule } from "./user/user.module";
import { ActionModule } from "./action/action.module";
import { MailModule } from "./mail/mail.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return await getDatabaseOptions();
      }
    }),
    AuthModule,
    GroupModule,
    ProblemModule,
    ServerModule,
    UserModule,
    ActionModule,
    MailModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
