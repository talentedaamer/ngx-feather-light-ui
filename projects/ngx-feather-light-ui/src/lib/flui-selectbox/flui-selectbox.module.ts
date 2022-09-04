import { NgModule } from '@angular/core';
import { FluiSelectbox } from './flui-selectbox';
import { FluiSharedModule } from "../common/flui-shared.module";

@NgModule({
  imports: [
    FluiSharedModule
  ],
  exports: [
    FluiSelectbox
  ],
  declarations: [
    FluiSelectbox
  ],
})
export class FluiSelectboxModule { }
