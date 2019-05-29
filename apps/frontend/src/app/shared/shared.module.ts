import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SidenavComponent } from "./sidenav/sidenav.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { UiModule } from "@observer/ui";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SidenavComponent, BreadcrumbComponent],
  imports: [CommonModule, UiModule, RouterModule],
  exports: [SidenavComponent, BreadcrumbComponent]
})
export class SharedModule {}
