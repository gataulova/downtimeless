import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { Group } from "@observer/data";

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private readonly groupRepository: Repository<Group>
  ) {}

  async findOneById(id: number): Promise<Group> {
    return await this.groupRepository.findOneOrFail(id);
  }

  async findAll(): Promise<Group[]> {
    return await this.groupRepository.find();
  }

  async create(partialGroup: Partial<Group>): Promise<Group> {
    return await this.groupRepository.create(partialGroup);
  }

  async updateOneById(id: number, partialGroup: Partial<Group>): Promise<any> {
    return await this.groupRepository.update(id, partialGroup);
  }

  async removeOneById(id: number): Promise<any> {
    return await this.groupRepository.delete(id);
  }
}
