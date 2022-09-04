import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FluiInputModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-input/flui-input.module";
import { FluiButtonModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-button/flui-button.module";
import { FluiCheckboxModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-checkbox/flui-checkbox.module";
import { FluiTextareaModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-textarea/flui-textarea.module";
import { FluiSelectboxModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-selectbox/flui-selectbox.module";
import { FluiRadioModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-radio/flui-radio.module";
import { FluiCardModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-card/flui-card.module";
import { FluiAlertModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-alert/flui-alert.module";

const FLUI_MODULES = [
  FluiInputModule,
  FluiButtonModule,
  FluiCheckboxModule,
  FluiTextareaModule,
  FluiSelectboxModule,
  FluiRadioModule,
  FluiCardModule,
  FluiAlertModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FLUI_MODULES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FLUI_MODULES
  ]
})
export class SharedModule { }
