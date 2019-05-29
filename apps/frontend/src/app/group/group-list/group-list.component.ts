import { Component, OnDestroy, OnInit } from "@angular/core";
import { Columns, Rows, Sort } from "@observer/ui";
import { Subscription } from "rxjs";
import { GroupQuery } from "../group.query";

@Component({
  selector: "observer-group-list",
  templateUrl: "./group-list.component.html",
  styleUrls: ["./group-list.component.scss"]
})
export class GroupListComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  columns: Columns = [
    { id: "name", name: "Name" },
    { id: "serverAmount", name: "Servers" },
    { id: "cpu", name: "CPU" },
    { id: "memory", name: "Memory" },
    { id: "swap", name: "SWAP" },
    { id: "disk", name: "Disk" },
    { id: "createdAt", name: "Created" }
  ];

  rows: Rows = [];

  sort: Sort = { sortBy: "name", direction: "asc" };

  constructor(private groupQuery: GroupQuery) {}

  ngOnInit() {
    this.subscription = this.groupQuery.groups$.subscribe(groups => {
      this.rows = groups;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSortChanged(sort: Sort) {
    this.sort = sort;
  }
}
