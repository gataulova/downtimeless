import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { Server, User } from "@observer/data";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOneOrFail(id);
  }

  async findOneByToken(token: string): Promise<User> {
    return await this.userRepository.findOneOrFail(token);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(partialUser: Partial<User>): Promise<User> {
    return await this.userRepository.create(partialUser);
  }

  async updateOneById(id: number, partialUser: Partial<User>): Promise<any> {
    return await this.userRepository.update(id, partialUser);
  }

  async removeOneById(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
