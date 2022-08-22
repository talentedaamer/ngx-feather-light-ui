import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/**
 * using modules from ngx-feather-light-ui npm package
 */
// import {
//   FluiButtonModule,
//   FluiCheckboxModule,
//   FluiInputModule
// } from "ngx-feather-light-ui";

import { FluiInputModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-input/flui-input.module";
import { FluiButtonModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-button/flui-button.module";
import { FluiCheckboxModule } from "../../../projects/ngx-feather-light-ui/src/lib/flui-checkbox/flui-checkbox.module";
import { FluiCardDirective } from "../../../projects/ngx-feather-light-ui/src/lib/flui-directives/flui-card.directive";
import {
  FluiMessageDirective
} from "../../../projects/ngx-feather-light-ui/src/lib/flui-directives/flui-message.directive";

@NgModule({
  declarations: [
    FluiCardDirective,
    FluiMessageDirective,
  ],
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
    FluiCardDirective,
    FluiMessageDirective,
  ]
})
export class SharedModule { }
