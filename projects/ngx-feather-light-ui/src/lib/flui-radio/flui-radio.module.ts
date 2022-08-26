import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluiRadioComponent } from './flui-radio.component';
import {FluiSharedModule} from "../modules/flui-shared/flui-shared.module";



@NgModule({
  declarations: [
    FluiRadioComponent
  ],
  imports: [
    FluiSharedModule
  ],
  exports: [
    FluiRadioComponent
  ]
})
export class FluiRadioModule { }
