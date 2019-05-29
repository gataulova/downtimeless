import { Component, Input, OnInit } from "@angular/core";

type TYPES = "success" | "error" | "warning";

@Component({
  selector: "ui-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  @Input() aType: TYPES = "success";

  constructor() {}

  ngOnInit() {}
}
