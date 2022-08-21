import { NgModule } from '@angular/core';
import { FluiInputComponent } from './flui-input.component';
import {FluiSharedModule} from "../modules/flui-shared/flui-shared.module";

@NgModule({
  declarations: [
    FluiInputComponent
  ],
  imports: [
    FluiSharedModule
  ],
  exports: [
    FluiInputComponent
  ]
})
export class FluiInputModule { }
