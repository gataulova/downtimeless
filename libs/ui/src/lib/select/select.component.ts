import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ui-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent implements OnInit {
  name = "";
  value = "";
  options = [];

  constructor() {}

  ngOnInit() {}

  onSelect(option: any) {}
}
