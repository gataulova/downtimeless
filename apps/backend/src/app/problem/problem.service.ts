import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { Group, Problem } from "@observer/data";

@Injectable()
export class ProblemService {
  constructor(
    @InjectRepository(Problem)
    private readonly problemRepository: Repository<Problem>
  ) {}

  async findOneById(id: number): Promise<Problem> {
    return await this.problemRepository.findOneOrFail(id);
  }

  async findAll(): Promise<Problem[]> {
    return await this.problemRepository.find();
  }

  async create(partialProblem: Partial<Problem>): Promise<Problem> {
    return await this.problemRepository.create(partialProblem);
  }

  async updateOneById(
    id: number,
    partialProblem: Partial<Problem>
  ): Promise<any> {
    return await this.problemRepository.update(id, partialProblem);
  }

  async removeOneById(id: number): Promise<any> {
    return await this.problemRepository.delete(id);
  }
}
