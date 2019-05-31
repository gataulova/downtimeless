import { Store, StoreConfig } from "@datorama/akita";
import { Injectable } from "@angular/core";

export interface ActionState {
  actions: any[];
}

export function createInitialState(): ActionState {
  return {
    actions: [
      {
        name: "Reboot",
        description: "Server Reboot",
        server: "142.93.239.222",
        createdAt: "a moment ago",
        byAccount: "ev_gataulova@outlook.com"
      },
      {
        name: "Execute",
        description: "mkdir test",
        server: "142.93.239.222",
        createdAt: "a moment ago",
        byAccount: "ev_gataulova@outlook.com"
      }
    ]
  };
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "action" })
export class ActionStore extends Store<ActionState> {
  constructor() {
    super(createInitialState());
  }
}
