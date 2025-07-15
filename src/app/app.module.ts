import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { ForecastDisplayComponent } from './components/forecast-display/forecast-display.component';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    CitySelectorComponent,
    ForecastDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }