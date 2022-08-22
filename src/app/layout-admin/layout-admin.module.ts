import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutAdminRoutingModule } from './layout-admin-routing.module';
import { DashboardComponent } from "../components/dashboard/dashboard.component";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LayoutAdminRoutingModule
  ]
})
export class LayoutAdminModule { }
