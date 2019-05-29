import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { GroupListComponent } from "./group-list/group-list.component";
import { UiModule } from "@observer/ui";

const ROUTES: Routes = [{ path: "", component: GroupListComponent }];

@NgModule({
  declarations: [GroupListComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), UiModule]
})
export class GroupModule {}
