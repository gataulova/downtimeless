import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AkitaNgRouterStoreModule } from "@datorama/akita-ng-router-store";
import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { SharedModule } from "./shared/shared.module";
import { UiModule } from "@observer/ui";

const ROUTES: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardModule"
  },
  { path: "actions", loadChildren: "./action/action.module#ActionModule" },
  { path: "groups", loadChildren: "./group/group.module#GroupModule" },
  { path: "problems", loadChildren: "./problem/problem.module#ProblemModule" },
  { path: "instances", loadChildren: "./server/server.module#OwnServerModule" },
  { path: "users", loadChildren: "./user/user.module#UserModule" }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { paramsInheritanceStrategy: "always" }),
    SharedModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
