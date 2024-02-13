import { HomeComponent } from '../app/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { ForecastComponent } from './forecast/forecast.component';


@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
