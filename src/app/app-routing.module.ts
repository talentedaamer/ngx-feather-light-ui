import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FluiInputPreviewComponent } from "./components/flui-input-preview/flui-input-preview.component";

const routes: Routes = [
  {
    path: "flui-input-preview",
    component: FluiInputPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
