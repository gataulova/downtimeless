import { Component, Input, OnInit } from "@angular/core";

type TYPES = "text" | "password";

@Component({
  selector: "ui-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  @Input() name: string = "Input";
  @Input() type: TYPES = "text";

  constructor() {}

  ngOnInit() {}
}
