import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { IsDate, IsInt, IsString } from "class-validator";

import { User } from "./User";

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  @IsString()
  token: string;

  @Column("timestamp with time zone")
  @IsDate()
  expiresAt: Date;

  @ManyToOne(() => User, user => user.tokens)
  @IsInt()
  user: User;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;
}
