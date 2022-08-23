import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FluiInputModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-input/flui-input.module";
import { FluiButtonModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-button/flui-button.module";
import { FluiCheckboxModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-checkbox/flui-checkbox.module";
import { FluiTextareaModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-textarea/flui-textarea.module";
import { FluiSelectboxModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-selectbox/flui-selectbox.module";
import { FluiRadioModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-radio/flui-radio.module";

import {
  FluiCardDirective,
  FluiCardHeaderDirective
} from "../../../projects/ngx-feather-light-ui/src/lib/flui-directives/flui-card.directive";

@NgModule({
  declarations: [
    FluiCardDirective,
    FluiCardHeaderDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FluiInputModule,
    FluiButtonModule,
    FluiCheckboxModule,
    FluiTextareaModule,
    FluiSelectboxModule,
    FluiRadioModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FluiInputModule,
    FluiButtonModule,
    FluiCheckboxModule,
    FluiTextareaModule,
    FluiSelectboxModule,
    FluiRadioModule,
    FluiCardDirective,
    FluiCardHeaderDirective
  ]
})
export class SharedModule { }
