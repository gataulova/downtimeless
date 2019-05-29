import { Component, OnDestroy, OnInit } from "@angular/core";

import { Columns, Rows, Sort } from "@observer/ui";
import { ActionQuery } from "../action.query";
import { Subscription } from "rxjs";

@Component({
  selector: "observer-action-list",
  templateUrl: "./action-list.component.html",
  styleUrls: ["./action-list.component.scss"]
})
export class ActionListComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  columns: Columns = [
    { id: "name", name: "Name" },
    { id: "description", name: "Description" },
    { id: "server", name: "Server" },
    { id: "createdAt", name: "Date" },
    { id: "byAccount", name: "Account" }
  ];

  rows: Rows = [];

  sort: Sort = { sortBy: "name", direction: "asc" };

  constructor(private actionQuery: ActionQuery) {}

  ngOnInit() {
    this.subscription = this.actionQuery.actions$.subscribe(actions => {
      this.rows = actions;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSortChanged(sort: Sort) {
    this.sort = sort;
  }
}
