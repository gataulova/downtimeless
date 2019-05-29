import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { IsBoolean, IsDate, IsString } from "class-validator";

import { Server, User } from "@observer/data";

@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  @IsString()
  type: string;

  @ManyToOne(() => Server)
  server: Server;

  @ManyToOne(() => User)
  user: User;

  @Column("boolean")
  @IsBoolean()
  isCompleted: boolean;

  @Column("timestamp with time zone")
  @IsDate()
  completedAt: Date;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;
}
