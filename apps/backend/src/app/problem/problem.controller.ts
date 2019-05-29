import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";

import { ProblemService } from "./problem.service";
import { CreateProblemDto, Problem } from "@observer/data";

@Controller("problem")
export class ProblemController {
  constructor(private readonly problemService: ProblemService) {}

  @Get(":id")
  async findOneById(@Param("id") id: string) {
    return await this.problemService.findOneById(Number(id));
  }

  @Get()
  async findAll() {
    return await this.problemService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createProblemDto: CreateProblemDto) {
    return await this.problemService.create(createProblemDto);
  }

  @Put(":id")
  @UsePipes(new ValidationPipe())
  async updateOneById(
    @Param("id") id: string,
    @Body() partialProblem: Partial<Problem>
  ) {
    return await this.problemService.updateOneById(Number(id), partialProblem);
  }

  @Delete(":id")
  async removeOneById(@Param("id") id: string) {
    return await this.problemService.removeOneById(Number(id));
  }
}
