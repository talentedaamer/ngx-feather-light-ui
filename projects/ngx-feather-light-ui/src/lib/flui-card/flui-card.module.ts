import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FluiCard,
  FluiCardTitle,
  FluiCardHeader,
  FluiCardContent,
  FluiCardActions,
  FluiCardFooter,
} from './flui-card';

// directives
const FLUI_CARD_DIRECTIVES = [
  FluiCard,
  FluiCardTitle,
  FluiCardHeader,
  FluiCardContent,
  FluiCardActions,
  FluiCardFooter,
]

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FLUI_CARD_DIRECTIVES
  ],
  declarations: [
    FLUI_CARD_DIRECTIVES
  ]
})
export class FluiCardModule { }
