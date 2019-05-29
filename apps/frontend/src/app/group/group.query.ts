import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";

import { GroupState, GroupStore } from "./group.store";

@Injectable({ providedIn: "root" })
export class GroupQuery extends Query<GroupState> {
  groups$ = this.select(state => state.groups);

  constructor(protected store: GroupStore) {
    super(store);
  }
}
