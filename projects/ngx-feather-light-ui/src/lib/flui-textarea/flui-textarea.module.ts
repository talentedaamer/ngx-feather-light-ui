import { NgModule } from '@angular/core';
import { FluiTextarea } from './flui-textarea';
import { FluiSharedModule } from "../common/flui-shared.module";

@NgModule({
  imports: [
    FluiSharedModule,
  ],
  exports: [
    FluiTextarea
  ],
  declarations: [
    FluiTextarea
  ],
})
export class FluiTextareaModule { }
