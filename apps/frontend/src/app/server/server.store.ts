import { Store, StoreConfig } from "@datorama/akita";
import randomId from "random-id";
import { Injectable } from "@angular/core";

export interface ServerState {
  servers: any[];
}

export function createInitialState(): ServerState {
  return {
    servers: Array.from({ length: 10 }).map(() => ({
      name: getRandomName(),
      ip: getRandomIp(),
      location: getRandomLocation(),
      agentStatus: getRandomBoolean(),
      serverStatus: true,
      cpuLoad: getRandomPercent(),
      memoryLoad: getRandomPercent(),
      swapLoad: getRandomPercent(),
      diskUsage: getRandomPercent(),
      uptime: getRandomUptime(),
      createdAt: getRandomRelativeDate()
    }))
  };
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "server" })
export class ServerStore extends Store<ServerState> {
  constructor() {
    super(createInitialState());
  }
}

function getRandomName() {
  return randomId(10, "aA0");
}

function getRandomNumber(from: number, to: number): number {
  return Math.round(Math.random() * (to - from) + from);
}

function getRandomIp(): string {
  const random1 = getRandomNumber(127, 255);
  const random2 = getRandomNumber(127, 255);
  const random3 = getRandomNumber(0, 255);
  const random4 = getRandomNumber(0, 255);

  return `${random1}.${random2}.${random3}.${random4}`;
}

function getRandomLocation(): string {
  const locations = ["USA", "Europe", "Asia"];
  const random = getRandomNumber(0, 2);

  return locations[random];
}

function getRandomBoolean(): boolean {
  const random = getRandomNumber(0, 10);

  return !!random;
}

function getRandomPercent(): string {
  const random = getRandomNumber(10, 100);

  return `${random}%`;
}

function getRandomUptime(): string {
  const random = getRandomNumber(30, 150);

  return `${random} days`;
}

function getRandomRelativeDate(): string {
  const random = getRandomNumber(70, 90);

  return `${random} days ago`;
}
