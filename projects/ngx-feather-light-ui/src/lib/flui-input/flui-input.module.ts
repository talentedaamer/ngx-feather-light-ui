import { NgModule } from '@angular/core';
import { FluiInput } from './flui-input';
import { FluiSharedModule } from "../common/flui-shared.module";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FluiSharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    FluiInput
  ],
  declarations: [
    FluiInput
  ],
})
export class FluiInputModule { }
