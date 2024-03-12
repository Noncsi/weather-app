import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgStyle } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DayModule } from '../day-module/day.module';
import { ProgressSpinnerModule } from '../progress-spinner-module/progress-spinner.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgStyle,
    ProgressSpinnerModule,
    DayModule,
  ],
  providers: [provideAnimationsAsync()],
  exports: [DashboardComponent],
})
export class DashboardModule {}
