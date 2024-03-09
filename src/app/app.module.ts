import { NavbarComponent } from './navbar-module/components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './day-module/components/day/day.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgStyle } from '@angular/common';
import { DashboardComponent } from './dashboard-module/components/dashboard/dashboard.component';
import { SplineModule } from './spline-module/spline.module';
import { NavbarModule } from './navbar-module/navbar.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent, DayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgStyle,
    NavbarModule,
    SplineModule,
  ],
  bootstrap: [AppComponent],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}
