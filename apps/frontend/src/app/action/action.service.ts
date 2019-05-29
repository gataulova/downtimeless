import { Injectable } from "@angular/core";

import { ActionStore } from "./action.store";

@Injectable({ providedIn: "root" })
export class ActionService {
  constructor(private actionStore: ActionStore) {}
}
