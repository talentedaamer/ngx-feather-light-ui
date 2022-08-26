import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluiSelectboxComponent } from './flui-selectbox.component';
import {FluiSharedModule} from "../modules/flui-shared/flui-shared.module";



@NgModule({
  declarations: [
    FluiSelectboxComponent
  ],
  imports: [
    FluiSharedModule
  ],
  exports: [
    FluiSelectboxComponent
  ]
})
export class FluiSelectboxModule { }
