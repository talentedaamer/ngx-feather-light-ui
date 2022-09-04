import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluiAlert } from './flui-alert';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FluiAlert
  ],
  declarations: [
    FluiAlert
  ],
})
export class FluiAlertModule { }
