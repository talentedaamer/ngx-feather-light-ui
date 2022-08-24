import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { InputComponent } from "../components/input/input.component";
import {ButtonComponent} from "../components/button/button.component";
import {TextareaComponent} from "../components/textarea/textarea.component";
import {CheckboxComponent} from "../components/checkbox/checkbox.component";
import {RadioComponent} from "../components/radio/radio.component";
import {SelectboxComponent} from "../components/selectbox/selectbox.component";
import {AlertComponent} from "../components/alert/alert.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'button',
    component: ButtonComponent,
    data: {
      title: 'Button'
    }
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutAdminRoutingModule { }
