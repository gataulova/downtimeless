import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ActionListComponent } from "./action-list/action-list.component";
import { UiModule } from "@observer/ui";

const ROUTES: Routes = [{ path: "", component: ActionListComponent }];

@NgModule({
  declarations: [ActionListComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), UiModule]
})
export class ActionModule {}
