import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { Columns, Rows, Sort } from "@observer/ui";
import { ProblemQuery } from "../problem.query";

@Component({
  selector: "observer-problem-list",
  templateUrl: "./problem-list.component.html",
  styleUrls: ["./problem-list.component.scss"]
})
export class ProblemListComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  columns: Columns = [
    { id: "name", name: "Name" },
    { id: "description", name: "Description" },
    { id: "server", name: "Server" },
    { id: "status", name: "Status" },
    { id: "startedAt", name: "Found" },
    { id: "resolvedAt", name: "Resolved" }
  ];

  rows: Rows = [];

  sort: Sort = { sortBy: "name", direction: "asc" };

  constructor(private problemQuery: ProblemQuery) {}

  ngOnInit() {
    this.subscription = this.problemQuery.problems$.subscribe(problems => {
      this.rows = problems;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSortChanged(sort: Sort) {
    this.sort = sort;
  }
}
