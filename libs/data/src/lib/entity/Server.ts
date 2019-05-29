import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { IsBoolean, IsDate, IsString } from "class-validator";

@Entity()
export class Server {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  @IsString()
  name: string;

  @Column("varchar")
  @IsString()
  ip: string;

  @Column("boolean")
  @IsBoolean()
  isActive: boolean;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;
}
