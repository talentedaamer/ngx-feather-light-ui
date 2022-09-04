import { NgModule } from '@angular/core';
import { FluiInput } from './flui-input';
import { FluiSharedModule } from "../common/flui-shared.module";

@NgModule({
  imports: [
    FluiSharedModule
  ],
  exports: [
    FluiInput
  ],
  declarations: [
    FluiInput
  ],
})
export class FluiInputModule { }
