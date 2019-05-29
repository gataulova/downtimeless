import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ButtonComponent } from "./button/button.component";
import { TitleComponent } from "./title/title.component";
import { InputComponent } from "./input/input.component";
import { SelectComponent } from "./select/select.component";
import { ModalComponent } from "./modal/modal.component";
import { AlertComponent } from "./alert/alert.component";
import { CardComponent } from "./card/card.component";
import { TableComponent } from "./table/table.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { IconComponent } from "./icon/icon.component";
import { StatusComponent } from "./status/status.component";

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [
    ButtonComponent,
    TitleComponent,
    InputComponent,
    SelectComponent,
    ModalComponent,
    AlertComponent,
    CardComponent,
    TableComponent,
    CheckboxComponent,
    SpinnerComponent,
    IconComponent,
    StatusComponent
  ],
  exports: [
    ButtonComponent,
    TitleComponent,
    InputComponent,
    SelectComponent,
    ModalComponent,
    AlertComponent,
    CardComponent,
    TableComponent,
    CheckboxComponent,
    SpinnerComponent,
    IconComponent,
    StatusComponent
  ]
})
export class UiModule {}
