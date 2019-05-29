import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";

import { ActionState, ActionStore } from "./action.store";

@Injectable({ providedIn: "root" })
export class ActionQuery extends Query<ActionState> {
  actions$ = this.select(state => state.actions);

  constructor(protected store: ActionStore) {
    super(store);
  }
}
