import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ui-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"]
})
export class StatusComponent implements OnInit {
  @Input() value: boolean = false;

  constructor() {}

  ngOnInit() {}
}
