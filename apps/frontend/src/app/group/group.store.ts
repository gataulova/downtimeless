import { Store, StoreConfig } from "@datorama/akita";
import { Injectable } from "@angular/core";

export interface GroupState {
  groups: any[];
}

export function createInitialState(): GroupState {
  return {
    groups: [
      {
        name: "Default",
        serverAmount: 5,
        cpu: true,
        memory: true,
        swap: true,
        disk: true,
        createdAt: "6 days ago"
      },
      {
        name: "Default",
        serverAmount: 5,
        cpu: true,
        memory: true,
        swap: true,
        disk: true,
        createdAt: "6 days ago"
      },
      {
        name: "Default",
        serverAmount: 5,
        cpu: true,
        memory: true,
        swap: true,
        disk: true,
        createdAt: "6 days ago"
      }
    ]
  };
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "group" })
export class GroupStore extends Store<GroupState> {
  constructor() {
    super(createInitialState());
  }
}
