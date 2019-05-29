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
        server: "127.0.0.1",
        createdAt: "2 days ago",
        byAccount: "ev_gataulova@outlook.com"
      },
      {
        name: "Reboot",
        description: "Server Reboot",
        server: "127.0.0.1",
        createdAt: "2 days ago",
        byAccount: "ev_gataulova@outlook.com"
      },
      {
        name: "Reboot",
        description: "Server Reboot",
        server: "127.0.0.1",
        createdAt: "2 days ago",
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
