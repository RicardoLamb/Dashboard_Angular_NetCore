import { appRoutes } from './../routes';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionsSalesComponent } from './sections/sections-sales/sections-sales.component';
import { SectionsOrdersComponent } from './sections/sections-orders/sections-orders.component';
import { SectionsHealthComponent } from './sections/sections-health/sections-health.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionsSalesComponent,
    SectionsOrdersComponent,
    SectionsHealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
