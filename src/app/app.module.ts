import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarHeaderPortalComponent } from './sidebar/sidebar-header-portal/sidebar-header-portal.component';
import {PortalModule} from '@angular/cdk/portal';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    SidebarHeaderPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
