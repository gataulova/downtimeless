import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";

import { ServerState, ServerStore } from "./server.store";

@Injectable({ providedIn: "root" })
export class ServerQuery extends Query<ServerState> {
  servers$ = this.select(state => state.servers);

  constructor(protected store: ServerStore) {
    super(store);
  }
}
