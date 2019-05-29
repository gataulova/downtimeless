import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ProblemListComponent } from "./problem-list/problem-list.component";
import { UiModule } from "@observer/ui";

const ROUTES: Routes = [{ path: "", component: ProblemListComponent }];

@NgModule({
  declarations: [ProblemListComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), UiModule]
})
export class ProblemModule {}
