import { NgModule } from '@angular/core';
import { FluiRadio } from './flui-radio';
import { FluiSharedModule } from "../common/flui-shared.module";

@NgModule({
  imports: [
    FluiSharedModule
  ],
  exports: [
    FluiRadio
  ],
  declarations: [
    FluiRadio
  ],
})
export class FluiRadioModule { }
