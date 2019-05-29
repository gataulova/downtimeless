import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ui-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() cClass: string = "";
  @Input() cWithoutPadding: boolean = false;

  constructor() {}

  ngOnInit() {}
}
