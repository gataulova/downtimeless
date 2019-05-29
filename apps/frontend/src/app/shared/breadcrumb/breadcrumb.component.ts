import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "observer-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"]
})
export class BreadcrumbComponent implements OnInit {
  @Input() link: string;

  constructor() {}

  ngOnInit() {}
}
