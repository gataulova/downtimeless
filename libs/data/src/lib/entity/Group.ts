import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { IsDate, IsString } from "class-validator";

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  @IsString()
  name: string;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;
}
