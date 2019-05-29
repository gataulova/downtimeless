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

import { UserService } from "./user.service";
import { CreateUserDto, User } from "@observer/data";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  async findOneById(@Param("id") id: string) {
    return await this.userService.findOneById(Number(id));
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Put(":id")
  @UsePipes(new ValidationPipe())
  async updateOneById(
    @Param("id") id: string,
    @Body() partialUser: Partial<User>
  ) {
    return await this.userService.updateOneById(Number(id), partialUser);
  }

  @Delete(":id")
  async removeOneById(@Param("id") id: string) {
    return await this.userService.removeOneById(Number(id));
  }
}
