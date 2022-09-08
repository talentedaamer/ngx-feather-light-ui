import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutAdminRoutingModule } from './layout-admin-routing.module';
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { InputComponent } from "../components/input/input.component";
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { ButtonComponent } from '../components/button/button.component';
import { TextareaComponent } from '../components/textarea/textarea.component';
import { SelectboxComponent } from '../components/selectbox/selectbox.component';
import { RadioComponent } from '../components/radio/radio.component';
import { AlertComponent } from '../components/alert/alert.component';
import { CardComponent } from "../components/card/card.component";
import { FormLoginComponent } from "../components/form-login/form-login.component";

@NgModule({
  declarations: [
    DashboardComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    TextareaComponent,
    SelectboxComponent,
    RadioComponent,
    AlertComponent,
    CardComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    LayoutAdminRoutingModule,
    SharedModule
  ]
})
export class LayoutAdminModule { }
