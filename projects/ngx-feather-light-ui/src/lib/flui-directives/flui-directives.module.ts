import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluiCardDirective } from "./flui-card.directive";
import { FluiMessageDirective } from './flui-message.directive';


@NgModule({
  declarations: [
    FluiCardDirective,
    FluiMessageDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FluiCardDirective,
    FluiMessageDirective,
  ]
})
export class FluiDirectivesModule { }
