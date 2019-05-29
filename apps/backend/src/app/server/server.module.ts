import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Server } from "@observer/data";
import { ServerService } from "./server.service";
import { ServerController } from "./server.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Server])],
  providers: [ServerService],
  controllers: [ServerController]
})
export class ServerModule {}
