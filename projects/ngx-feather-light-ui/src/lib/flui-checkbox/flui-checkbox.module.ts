import { NgModule } from '@angular/core';
import { FluiCheckboxComponent } from './flui-checkbox.component';
import { FluiSharedModule } from "../modules/flui-shared/flui-shared.module";

@NgModule({
  declarations: [
    FluiCheckboxComponent
  ],
  imports: [
    FluiSharedModule
  ],
  exports: [
    FluiCheckboxComponent
  ]
})
export class FluiCheckboxModule { }
