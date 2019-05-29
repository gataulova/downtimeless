import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { IsBoolean, IsDate, IsString } from "class-validator";

import { Server } from "./Server";

@Entity()
export class Problem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  @IsString()
  name: string;

  @Column("varchar")
  @IsString()
  description: string;

  @ManyToOne(() => Server)
  server: Server;

  @Column("boolean")
  @IsBoolean()
  isResolved: boolean;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;
}
