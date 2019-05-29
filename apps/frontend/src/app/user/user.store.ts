import { Store, StoreConfig } from "@datorama/akita";
import { Injectable } from "@angular/core";

export interface UserState {
  users: any[];
}

export function createInitialState(): UserState {
  return {
    users: [
      {
        id: 1,
        email: "ev_gataulova@outlook.com",
        firstName: "Evgeniya",
        secondName: "Gataulova",
        roles: ["ADMIN"],
        isActive: true,
        createdAt: "100 days ago",
        lastActivityAt: "5 min ago"
      }
    ]
  };
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "user" })
export class UserStore extends Store<UserState> {
  constructor() {
    super(createInitialState());
  }
}
