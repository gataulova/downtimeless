import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import { IsArray, IsBoolean, IsDate, IsString } from "class-validator";

import { Token } from "./Token";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  @IsString()
  email: string;

  @Column("boolean")
  @IsBoolean()
  isActive: boolean;

  @Column("jsonb")
  @IsArray()
  roles: string[];

  @OneToMany(() => Token, token => token.user)
  tokens: Token[];

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;
}
