import { Component, OnInit } from "@angular/core";
import { Label } from "ng2-charts";
import { ChartOptions } from "chart.js";

@Component({
  selector: "observer-server-stats",
  templateUrl: "./server-stats.component.html",
  styleUrls: ["./server-stats.component.scss"]
})
export class ServerStatsComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: "right"
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          return ctx.chart.data.labels[ctx.dataIndex];
        }
      }
    }
  };

  public pieChartLabels: Label[] = [["Pending"], ["Online"], ["Offline"]];

  public pieChartData: number[] = [300, 500, 100];

  public pieChartLegend = true;

  public pieChartPlugins = [];

  public pieChartColors = [
    {
      backgroundColor: [
        "rgb(235, 203 ,139)",
        "rgb(163, 190, 140)",
        "rgb(180, 142, 173)"
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
