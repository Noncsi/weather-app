import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { DayComponent } from '../day-module/components/day/day.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgStyle } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, DayComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgStyle],
  bootstrap: [AppComponent],
  providers: [provideAnimationsAsync()],
})
export class DashboardModule {}
