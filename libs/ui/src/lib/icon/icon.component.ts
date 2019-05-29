import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ui-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"]
})
export class IconComponent implements OnInit {
  @Input() marginLeft: string = "0";
  @Input() marginRight: string = "0";
  @Input() section: string = "core";
  @Input() shape: string;

  constructor() {}

  ngOnInit() {}
}
