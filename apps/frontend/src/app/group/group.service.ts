import { Injectable } from "@angular/core";

import { GroupStore } from "./group.store";

@Injectable({ providedIn: "root" })
export class GroupService {
  constructor(private groupStore: GroupStore) {}
}
