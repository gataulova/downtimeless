import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { IsDate, IsNumber } from "class-validator";

import { Server } from "@observer/data";

@Entity({ name: "disk_data" })
export class DiskData {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Server)
  server: Server;

  @Column("double precision")
  @IsNumber()
  totalMegabytes: number;

  @Column("double precision")
  @IsNumber()
  freeMegabytes: number;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;
}
