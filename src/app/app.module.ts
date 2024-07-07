import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgStyle } from '@angular/common';
import { NavbarModule } from './navbar-module/navbar.module';
import { DashboardModule } from './dashboard-module/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgStyle,
    NavbarModule,
    DashboardModule,
  ],
  bootstrap: [AppComponent],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}
