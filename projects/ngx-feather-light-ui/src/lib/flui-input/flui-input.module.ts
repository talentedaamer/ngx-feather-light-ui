import { NgModule } from '@angular/core';
import { FluiInputComponent } from './flui-input.component';
import {SharedModule} from "../../../../../src/app/shared/shared.module";



@NgModule({
  declarations: [
    FluiInputComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class FluiInputModule { }
