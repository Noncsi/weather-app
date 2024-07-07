import { WeatherData } from './models/weather-data';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgStyle } from '@angular/common';
import { NavbarModule } from './navbar-module/navbar.module';
import { DashboardModule } from './dashboard-module/dashboard.module';
import { StoreModule } from '@ngrx/store';
import { weatherReducer } from './state/reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeatherDataEffects } from './state/effect';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgStyle,
    NavbarModule,
    DashboardModule,
    StoreModule.forRoot({ weatherData: weatherReducer }),
    EffectsModule.forRoot([WeatherDataEffects]),
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
