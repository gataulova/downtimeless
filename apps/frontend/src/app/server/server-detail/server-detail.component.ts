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

  dataCpu = [85, 59, 75, 37, 38, 24, 35, 60, 47, 52, 46, 45, 40];

  public lineChartDataCpu: ChartDataSets[] = [
    {
      data: this.dataCpu,
      borderWidth: 1,
      pointRadius: 0,
      fill: "start"
    }
  ];

  public lineChartLabelsCpu: Label[] = this.dataCpu.map(value => String(value));

  dataMemory = [55, 69, 65, 57, 58, 44, 55, 70, 67, 62, 66, 55, 52];

  public lineChartDataMemory: ChartDataSets[] = [
    {
      data: this.dataMemory,
      borderWidth: 1,
      pointRadius: 0,
      fill: "start"
    }
  ];

  public lineChartLabelsMemory: Label[] = this.dataMemory.map(value =>
    String(value)
  );

  dataSwap = [15, 14, 15, 20, 17, 14, 15, 10, 15, 17, 18, 15, 15];

  public lineChartDataSwap: ChartDataSets[] = [
    {
      data: this.dataSwap,
      borderWidth: 1,
      pointRadius: 0,
      fill: "start"
    }
  ];

  public lineChartLabelsSwap: Label[] = this.dataSwap.map(value =>
    String(value)
  );

  dataDisk = [28, 35, 40, 47, 35, 37, 38, 40, 37, 35, 30, 37, 31];

  public lineChartDataDisk: ChartDataSets[] = [
    {
      data: this.dataDisk,
      borderWidth: 1,
      pointRadius: 0,
      fill: "start"
    }
  ];

  public lineChartLabelsDisk: Label[] = this.dataDisk.map(value =>
    String(value)
  );

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
            min: 0,
            max: 100,
            suggestedMin: 0,
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

  onRefresh() {
    alert("Server rebooted successfully");
  }

  onPower() {
    alert("Server powered off successfully");
  }

  onExecute() {
    alert("Command executed successfully");
  }
}
