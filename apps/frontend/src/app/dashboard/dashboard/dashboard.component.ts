import { Component, OnDestroy, OnInit } from "@angular/core";
import { DateTime, Duration } from "luxon";

@Component({
  selector: "observer-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  interval: any;
  lastProblemDate: DateTime = DateTime.utc(2019, 5, 28, 5, 46, 23);
  dayAmount: number = 0;
  hourAmount: number = 0;
  minuteAmount: number = 0;
  secondAmount: number = 0;

  constructor() {}

  ngOnInit() {
    this.getValues();

    this.interval = setInterval(() => {
      this.getValues();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getValues() {
    const now = DateTime.utc();
    const difference = now.valueOf() - this.lastProblemDate.valueOf();

    this.dayAmount = this.getDaysFromMillis(difference);
    this.hourAmount = this.getHoursFromMillis(difference, this.dayAmount);
    this.minuteAmount = this.getMinutesFromMillis(
      difference,
      this.dayAmount,
      this.hourAmount
    );
    this.secondAmount = this.getSecondFromMillis(
      difference,
      this.dayAmount,
      this.hourAmount,
      this.minuteAmount
    );
  }

  formatNumber(value: number): string {
    const valueAsString = String(Math.trunc(value));

    return valueAsString.padStart(2, "0");
  }

  getDaysFromMillis(value: number): number {
    const days = value / 1000 / 60 / 60 / 24;

    return days > 0 ? Math.trunc(days) : 0;
  }

  getHoursFromMillis(value: number, dayAmount: number): number {
    const daysAsMillis = dayAmount * 24 * 60 * 60 * 1000;
    const hours = (value - daysAsMillis) / 1000 / 60 / 60;

    return hours > 0 ? Math.trunc(hours) : 0;
  }

  getMinutesFromMillis(
    value: number,
    dayAmount: number,
    hourAmount: number
  ): number {
    const daysAsMillis = dayAmount * 24 * 60 * 60 * 1000;
    const hoursAsMillis = hourAmount * 60 * 60 * 1000;
    const minutes = (value - daysAsMillis - hoursAsMillis) / 1000 / 60;

    return minutes > 0 ? Math.trunc(minutes) : 0;
  }

  getSecondFromMillis(
    value: number,
    dayAmount: number,
    hourAmount: number,
    minuteAmount: number
  ): number {
    const daysAsMillis = dayAmount * 24 * 60 * 60 * 1000;
    const hoursAsMillis = hourAmount * 60 * 60 * 1000;
    const minutesAsMillis = minuteAmount * 60 * 1000;
    const seconds =
      (value - daysAsMillis - hoursAsMillis - minutesAsMillis) / 1000;

    return seconds > 0 ? Math.trunc(seconds) : 0;
  }
}
