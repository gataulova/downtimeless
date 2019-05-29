import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Action } from "@observer/data";
import { ActionService } from "./action.service";
import { ActionController } from "./action.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Action])],
  providers: [ActionService],
  controllers: [ActionController]
})
export class ActionModule {}
