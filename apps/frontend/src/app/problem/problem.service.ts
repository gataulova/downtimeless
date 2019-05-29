import { Injectable } from "@angular/core";

import { ProblemStore } from "./problem.store";

@Injectable({ providedIn: "root" })
export class ProblemService {
  constructor(private problemStore: ProblemStore) {}
}
