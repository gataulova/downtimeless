import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { IsDate, IsInt, IsNumber, IsString } from "class-validator";

import { Server } from "@observer/data";

@Entity({ name: "cpu_data" })
export class CpuData {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Server)
  server: Server;

  @Column("varchar")
  @IsString()
  name: string;

  @Column("double precision")
  @IsNumber()
  frequency: number;

  @Column("integer")
  @IsInt()
  coreAmount: number;

  @Column("integer")
  @IsInt()
  loadPercent: number;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;
}
