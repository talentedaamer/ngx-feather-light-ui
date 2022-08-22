import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { FluiInputPreviewComponent } from './components/flui-input-preview/flui-input-preview.component';
import { LayoutAdminComponent } from "./layout-admin/layout-admin.component";
import { HeaderModule } from "./shared/header.module";
import { SidebarModule } from "./shared/sidebar.module";

@NgModule({
  declarations: [
    AppComponent,
    FluiInputPreviewComponent,
    LayoutAdminComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
