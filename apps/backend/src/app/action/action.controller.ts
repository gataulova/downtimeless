import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
  Body
} from "@nestjs/common";

import { ActionService } from "./action.service";
import { Action, CreateActionDto } from "@observer/data";

@Controller("action")
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Get(":id")
  async findOneById(@Param("id") id: string) {
    return await this.actionService.findOneById(Number(id));
  }

  @Get()
  async findAll() {
    return await this.actionService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createActionDto: CreateActionDto) {
    return await this.actionService.create(createActionDto);
  }

  @Put(":id")
  @UsePipes(new ValidationPipe())
  async updateOneById(
    @Param("id") id: string,
    @Body() partialAction: Partial<Action>
  ) {
    return await this.actionService.updateOneById(Number(id), partialAction);
  }

  @Delete(":id")
  async removeOneById(@Param("id") id: string) {
    return await this.actionService.removeOneById(Number(id));
  }
}
