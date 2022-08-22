import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FluiInputPreviewComponent } from "./components/flui-input-preview/flui-input-preview.component";
import {LayoutAdminComponent} from "./layout-admin/layout-admin.component";

const routes: Routes = [
  {
    path: "flui-input-preview",
    component: FluiInputPreviewComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layout-admin/layout-admin.module').then( m => m.LayoutAdminModule )
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
