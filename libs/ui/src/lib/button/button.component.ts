import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

type TYPES = "button" | "submit";
type COLORS = "primary" | "secondary";

@Component({
  selector: "ui-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  @Input() bType: TYPES = "button";
  @Input() bColor: COLORS = "primary";
  @Input() bIsDisabled: boolean = false;
  @Input() bClass: string = "";

  @Output() click: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(event: any): void {
    this.click.emit(event);
  }
}
