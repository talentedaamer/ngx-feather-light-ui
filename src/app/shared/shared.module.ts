import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FluiInputModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-input/flui-input.module";
import { FluiButtonModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-button/flui-button.module";
import {FluiCheckboxModule} from "../../../projects/ngx-feather-light-ui/src/lib/flui-checkbox/flui-checkbox.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FluiInputModule,
    FluiButtonModule,
    FluiCheckboxModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FluiInputModule,
    FluiButtonModule,
    FluiCheckboxModule,
  ]
})
export class SharedModule { }
