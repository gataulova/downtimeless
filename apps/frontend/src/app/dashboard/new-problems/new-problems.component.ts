import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";

@Component({
  selector: "observer-new-problems",
  templateUrl: "./new-problems.component.html",
  styleUrls: ["./new-problems.component.scss"]
})
export class NewProblemsComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          position: "right",
          ticks: {
            beginAtZero: false,
            min: 20,
            max: 100,
            suggestedMin: 20,
            suggestedMax: 100
          }
        }
      ]
    }
  };

  public barChartLabels: Label[] = ["February", "March", "April", "May"];

  public barChartLegend = false;

  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [{ data: [65, 59, 80, 50] }];

  public barChartColors: Color[] = [
    {
      backgroundColor: "rgba(191, 97, 106, 1)",
      borderColor: "rgba(191, 97, 106, 1)",
      pointBackgroundColor: "rgba(208, 135, 112, 0.8)",
      pointBorderColor: "rgba(208, 135, 112, 0.9)",
      pointHoverBackgroundColor: "rgba(208, 135, 112, 1)",
      pointHoverBorderColor: "rgba(208, 135, 112, 1)"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
