import {
  Connection,
  ConnectionOptions,
  createConnection,
  getConnectionOptions
} from "typeorm";

import { Server } from "./entity/Server";
import { User } from "./entity/User";
import { Token } from "./entity/Token";
import { Action } from "./entity/Action";
import { CpuData } from "./entity/CpuData";
import { DiskData } from "./entity/DiskData";
import { Group } from "./entity/Group";
import { MemoryData } from "./entity/MemoryData";
import { Problem } from "./entity/Problem";
import { SwapData } from "./entity/SwapData";

export let db: Connection;

export async function getDatabaseOptions(): Promise<ConnectionOptions> {
  const options = await getConnectionOptions();

  return {
    ...options,
    entities: [
      Server,
      User,
      Token,
      Action,
      CpuData,
      DiskData,
      Group,
      MemoryData,
      Problem,
      SwapData
    ],
    subscribers: [],
    migrations: []
  };
}

export async function initDatabaseConnection(): Promise<void> {
  db = await createConnection(await getDatabaseOptions());
}
