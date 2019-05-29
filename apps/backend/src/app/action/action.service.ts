import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Action } from "@observer/data";

@Injectable()
export class ActionService {
  constructor(
    @InjectRepository(Action)
    private readonly actionRepository: Repository<Action>
  ) {}

  async findOneById(id: number): Promise<Action> {
    return await this.actionRepository.findOneOrFail(id);
  }

  async findAll(): Promise<Action[]> {
    return await this.actionRepository.find();
  }

  async create(partialAction: Partial<Action>): Promise<Action> {
    return await this.actionRepository.create(partialAction);
  }

  async updateOneById(
    id: number,
    partialAction: Partial<Action>
  ): Promise<any> {
    return await this.actionRepository.update(id, partialAction);
  }

  async removeOneById(id: number): Promise<any> {
    return await this.actionRepository.delete(id);
  }
}
