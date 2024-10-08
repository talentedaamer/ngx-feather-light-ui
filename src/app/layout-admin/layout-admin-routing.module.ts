import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { InputComponent } from "../components/input/input.component";
import { ButtonComponent } from "../components/button/button.component";
import { TextareaComponent } from "../components/textarea/textarea.component";
import { CheckboxComponent } from "../components/checkbox/checkbox.component";
import { RadioComponent } from "../components/radio/radio.component";
import { SelectboxComponent } from "../components/selectbox/selectbox.component";
import { AlertComponent } from "../components/alert/alert.component";
import { CardComponent } from "../components/card/card.component";
import { FormLoginComponent } from "../components/form-login/form-login.component";
import {FormRegisterComponent} from "../components/form-register/form-register.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'button',
    component: ButtonComponent
  },
  {
    path: 'input',
    component: InputComponent
  },
  {
    path: 'textarea',
    component: TextareaComponent
  },
  {
    path: 'checkbox',
    component: CheckboxComponent
  },
  {
    path: 'radio',
    component: RadioComponent
  },
  {
    path: 'selectbox',
    component: SelectboxComponent
  },
  {
    path: 'alert',
    component: AlertComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'form-login',
    component: FormLoginComponent
  }
  ,
  {
    path: 'form-register',
    component: FormRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutAdminRoutingModule { }
