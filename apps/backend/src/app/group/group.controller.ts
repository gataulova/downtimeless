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

import { GroupService } from "./group.service";
import { Group, CreateGroupDto } from "@observer/data";

@Controller("group")
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get(":id")
  async findOneById(@Param("id") id: string) {
    return await this.groupService.findOneById(Number(id));
  }

  @Get()
  async findAll() {
    return await this.groupService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createGroupDto: CreateGroupDto) {
    return await this.groupService.create(createGroupDto);
  }

  @Put(":id")
  @UsePipes(new ValidationPipe())
  async updateOneById(
    @Param("id") id: string,
    @Body() partialGroup: Partial<Group>
  ) {
    return await this.groupService.updateOneById(Number(id), partialGroup);
  }

  @Delete(":id")
  async removeOneById(@Param("id") id: string) {
    return await this.groupService.removeOneById(Number(id));
  }
}
