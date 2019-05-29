import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { Problem, Server } from "@observer/data";

@Injectable()
export class ServerService {
  constructor(
    @InjectRepository(Server)
    private readonly serverRepository: Repository<Server>
  ) {}

  async findOneById(id: number): Promise<Server> {
    return await this.serverRepository.findOneOrFail(id);
  }

  async findAll(): Promise<Server[]> {
    return await this.serverRepository.find();
  }

  async create(partialServer: Partial<Server>): Promise<Server> {
    return await this.serverRepository.create(partialServer);
  }

  async updateOneById(
    id: number,
    partialServer: Partial<Server>
  ): Promise<any> {
    return await this.serverRepository.update(id, partialServer);
  }

  async removeOneById(id: number): Promise<any> {
    return await this.serverRepository.delete(id);
  }
}
