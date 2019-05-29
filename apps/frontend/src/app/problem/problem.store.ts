import { Store, StoreConfig } from "@datorama/akita";
import { Injectable } from "@angular/core";

export interface ProblemState {
  problems: any[];
}

export function createInitialState(): ProblemState {
  return {
    problems: [
      {
        name: "Rebooted",
        description: "Server was rebooted",
        server: "127.0.0.1",
        status: true,
        startedAt: "1 day ago",
        resolvedAt: "1 day ago"
      },
      {
        name: "Rebooted",
        description: "Server was rebooted",
        server: "127.0.0.1",
        status: true,
        startedAt: "1 day ago",
        resolvedAt: "1 day ago"
      },
      {
        name: "Rebooted",
        description: "Server was rebooted",
        server: "127.0.0.1",
        status: true,
        startedAt: "1 day ago",
        resolvedAt: "1 day ago"
      }
    ]
  };
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "problem" })
export class ProblemStore extends Store<ProblemState> {
  constructor() {
    super(createInitialState());
  }
}
