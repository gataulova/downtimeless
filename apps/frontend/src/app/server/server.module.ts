import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ServerListComponent } from "./server-list/server-list.component";
import { UiModule } from "@observer/ui";
import { ServerDetailComponent } from "./server-detail/server-detail.component";
import { ChartsModule } from "ng2-charts";

const ROUTES: Routes = [
  { path: "", component: ServerListComponent },
  { path: "create", component: ServerListComponent },
  { path: ":id", component: ServerDetailComponent }
];

@NgModule({
  declarations: [ServerListComponent, ServerDetailComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), UiModule, ChartsModule]
})
export class OwnServerModule {}
