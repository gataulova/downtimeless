import { Component, OnDestroy, OnInit } from "@angular/core";
import { Columns, Rows, Sort } from "@observer/ui";
import { Subscription } from "rxjs";
import { UserQuery } from "../user.query";

@Component({
  selector: "observer-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  columns: Columns = [
    { id: "id", name: "ID" },
    { id: "email", name: "email" },
    { id: "firstName", name: "First Name" },
    { id: "secondName", name: "Second Name" },
    { id: "roles", name: "Roles" },
    { id: "isActive", name: "Active" },
    { id: "createdAt", name: "Created" },
    { id: "lastActivityAt", name: "Last Activity" }
  ];

  rows: Rows = [];

  sort: Sort = { sortBy: "name", direction: "asc" };

  constructor(private userQuery: UserQuery) {}

  ngOnInit() {
    this.subscription = this.userQuery.users$.subscribe(users => {
      this.rows = users;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSortChanged(sort: Sort) {
    this.sort = sort;
  }
}
