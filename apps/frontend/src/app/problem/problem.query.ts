import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";

import { ProblemState, ProblemStore } from "./problem.store";

@Injectable({ providedIn: "root" })
export class ProblemQuery extends Query<ProblemState> {
  problems$ = this.select(state => state.problems);

  constructor(protected store: ProblemStore) {
    super(store);
  }
}
