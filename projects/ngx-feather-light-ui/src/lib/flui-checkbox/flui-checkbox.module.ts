import { NgModule } from '@angular/core';
import { FluiCheckbox } from './flui-checkbox';
import { FluiSharedModule } from "../common/flui-shared.module";

@NgModule({
  imports: [
    FluiSharedModule
  ],
  exports: [
    FluiCheckbox
  ],
  declarations: [
    FluiCheckbox
  ],
})
export class FluiCheckboxModule { }
