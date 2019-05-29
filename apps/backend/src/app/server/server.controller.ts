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

import { ServerService } from "./server.service";
import { CreateServerDto, Server } from "@observer/data";

@Controller("server")
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @Get(":id")
  async findOneById(@Param("id") id: string) {
    return await this.serverService.findOneById(Number(id));
  }

  @Get()
  async findAll() {
    return await this.serverService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createServerDto: CreateServerDto) {
    return await this.serverService.create(createServerDto);
  }

  @Put(":id")
  @UsePipes(new ValidationPipe())
  async updateOneById(
    @Param("id") id: string,
    @Body() partialServer: Partial<Server>
  ) {
    return await this.serverService.updateOneById(Number(id), partialServer);
  }

  @Delete(":id")
  async removeOneById(@Param("id") id: string) {
    return await this.serverService.removeOneById(Number(id));
  }
}
