import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Problem } from "@observer/data";
import { ProblemService } from "./problem.service";
import { ProblemController } from "./problem.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Problem])],
  providers: [ProblemService],
  controllers: [ProblemController]
})
export class ProblemModule {}
