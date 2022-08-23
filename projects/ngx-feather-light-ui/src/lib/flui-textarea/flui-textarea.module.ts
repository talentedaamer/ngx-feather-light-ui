import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluiTextareaComponent } from './flui-textarea.component';
import {FluiSharedModule} from "../modules/flui-shared/flui-shared.module";



@NgModule({
  declarations: [
    FluiTextareaComponent
  ],
  imports: [
    CommonModule,
    FluiSharedModule,
  ],
  exports: [
    FluiTextareaComponent
  ]
})
export class FluiTextareaModule { }
