import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FluiCardDirective, FluiCardHeaderDirective} from "./flui-card.directive";


@NgModule({
  declarations: [
    FluiCardDirective,
    FluiCardHeaderDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FluiCardDirective,
    FluiCardHeaderDirective,
  ]
})
export class FluiDirectivesModule { }
