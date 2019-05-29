import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";

import { UserState, UserStore } from "./user.store";

@Injectable({ providedIn: "root" })
export class UserQuery extends Query<UserState> {
  users$ = this.select(state => state.users);

  constructor(protected store: UserStore) {
    super(store);
  }
}
