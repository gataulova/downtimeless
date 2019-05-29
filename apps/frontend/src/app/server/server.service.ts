import { Injectable } from "@angular/core";

import { ServerStore } from "./server.store";

@Injectable({ providedIn: "root" })
export class ServerService {
  constructor(private serverStore: ServerStore) {}
}
