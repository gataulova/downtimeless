import { Component, OnDestroy, OnInit } from "@angular/core";
import randomId from "random-id";
import { Subscription } from "rxjs";

import { Columns, Row, Rows, Sort } from "@observer/ui";
import { ServerQuery } from "../server.query";

@Component({
  selector: "observer-server-list",
  templateUrl: "./server-list.component.html",
  styleUrls: ["./server-list.component.scss"]
})
export class ServerListComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  columns: Columns = [
    { id: "name", name: "Name" },
    { id: "ip", name: "IPv4" },
    { id: "location", name: "Location" },
    { id: "agentStatus", name: "Agent" },
    { id: "serverStatus", name: "Server" },
    { id: "cpuLoad", name: "CPU Load" },
    { id: "memoryLoad", name: "Memory Load" },
    { id: "swapLoad", name: "SWAP Load" },
    { id: "diskUsage", name: "Disk Usage" },
    { id: "uptime", name: "Uptime" },
    { id: "createdAt", name: "Created" }
  ];

  rows: Rows = [];

  sort: Sort = { sortBy: "name", direction: "asc" };

  constructor(private serverQuery: ServerQuery) {}

  ngOnInit() {
    this.subscription = this.serverQuery.servers$.subscribe(servers => {
      this.rows = servers;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSortChanged(sort: Sort) {
    this.sort = sort;
  }

  getRandomName() {
    return randomId(10, "aA0");
  }

  getRandomNumber(from: number, to: number): number {
    return Math.round(Math.random() * (to - from) + from);
  }

  getRandomIp(): string {
    const random1 = this.getRandomNumber(127, 255);
    const random2 = this.getRandomNumber(127, 255);
    const random3 = this.getRandomNumber(0, 255);
    const random4 = this.getRandomNumber(0, 255);

    return `${random1}.${random2}.${random3}.${random4}`;
  }

  getRandomLocation(): string {
    const locations = ["USA", "Europe", "Asia"];
    const random = this.getRandomNumber(0, 2);

    return locations[random];
  }

  getRandomBoolean(): boolean {
    const random = this.getRandomNumber(0, 10);

    return !!random;
  }

  getRandomPercent(): string {
    const random = this.getRandomNumber(10, 100);

    return `${random}%`;
  }

  getRandomUptime(): string {
    const random = this.getRandomNumber(30, 150);

    return `${random} days`;
  }

  getRandomRelativeDate(): string {
    const random = this.getRandomNumber(70, 90);

    return `${random} days ago`;
  }
}
