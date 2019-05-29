import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { UserListComponent } from "./user-list/user-list.component";
import { UiModule } from "@observer/ui";
import { UserCreateComponent } from "./user-create/user-create.component";

const ROUTES: Routes = [
  { path: "", component: UserListComponent },
  { path: "create", component: UserCreateComponent }
];

@NgModule({
  declarations: [UserListComponent, UserCreateComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), UiModule]
})
export class UserModule {}
