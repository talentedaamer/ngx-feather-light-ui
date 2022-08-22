import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluiCardDirective } from "./flui-card.directive";


@NgModule({
  declarations: [
    FluiCardDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FluiCardDirective
  ]
})
export class FluiDirectivesModule { }
