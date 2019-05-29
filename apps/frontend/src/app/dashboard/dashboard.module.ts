import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ChartsModule } from "ng2-charts";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { UiModule } from "@observer/ui";
import { AverageUptimeComponent } from "./average-uptime/average-uptime.component";
import { ServerStatsComponent } from "./server-stats/server-stats.component";
import { NewProblemsComponent } from "./new-problems/new-problems.component";

const ROUTES: Routes = [{ path: "", component: DashboardComponent }];

@NgModule({
  declarations: [
    DashboardComponent,
    AverageUptimeComponent,
    ServerStatsComponent,
    NewProblemsComponent
  ],
  imports: [CommonModule, RouterModule.forChild(ROUTES), UiModule, ChartsModule]
})
export class DashboardModule {}
