import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgStyle } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DayModule } from '../day-module/components/day/day.module';
import { ProgressSpinnerModule } from '../progress-spinner-module/progress-spinner.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LocationModule } from '../location-module/location.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgStyle,
    ProgressSpinnerModule,
    DayModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    LocationModule,
  ],
  providers: [provideAnimationsAsync()],
  exports: [DashboardComponent],
})
export class DashboardModule {}