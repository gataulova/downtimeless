import { Component, OnDestroy, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "observer-server-detail",
  templateUrl: "./server-detail.component.html",
  styleUrls: ["./server-detail.component.scss"]
})
export class ServerDetailComponent implements OnInit, OnDestroy {
  id: string = "";

  subscription: Subscription;

  data = [85, 69, 75, 77, 88, 84, 85, 90, 97, 92, 96, 95, 99];

  public lineChartData: ChartDataSets[] = [
    {
      data: this.data,
      borderWidth: 1,
      pointRadius: 0,
      fill: "start"
    }
  ];

  public lineChartLabels: Label[] = this.data.map(value => String(value));

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    spanGaps: false,
    legend: {
      display: false
    },
    elements: {
      line: {
        tension: 0.4
      }
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    plugins: {
      filler: {
        propagate: false
      }
    },
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          position: "right",
          ticks: {
            beginAtZero: false,
            min: 50,
            max: 100,
            suggestedMin: 60,
            suggestedMax: 100
          }
        }
      ]
    }
  };

  public lineChartColors: Color[] = [
    {
      backgroundColor: "rgba(191, 97, 106, 0.2)",
      borderColor: "rgba(191, 97, 106, 1)",
      pointBackgroundColor: "rgba(208, 135, 112, 0.8)",
      pointBorderColor: "rgba(208, 135, 112, 0.9)",
      pointHoverBackgroundColor: "rgba(208, 135, 112, 1)",
      pointHoverBorderColor: "rgba(208, 135, 112, 1)"
    }
  ];

  public lineChartLegend = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
