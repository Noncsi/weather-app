import { Observable, map } from 'rxjs';
import { Component } from '@angular/core';
import { WeatherData, DailyWeather } from '../../../weather';
import { WeatherService } from '../../../weather.service';
import { TemperaturePosition } from '../../../day-module/models/temperature-position';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  weatherData$: Observable<WeatherData>;
  todaysWeather$: Observable<DailyWeather>;
  tempPosition$: Observable<TemperaturePosition[]>;

  constructor(private weatherService: WeatherService) {
    this.weatherData$ = this.weatherService.weatherInfo$.pipe(
      map((weatherData) => {
        const baseValue = Math.max(
          ...weatherData.dailyWeathers.map(
            (dailyWeather) => dailyWeather.temperatureMax
          )
        );
        console.log(baseValue);
        return {
          ...weatherData,
          dailyWeathers: weatherData.dailyWeathers.map((dailyWeather) => ({
            ...dailyWeather,
            tempPosition: {
              max: (baseValue - dailyWeather.temperatureMax) * 11,
              min: (baseValue - dailyWeather.temperatureMin) * 11,
            },
          })),
        };
      })
    );
    this.todaysWeather$ = this.weatherData$.pipe(
      map((weatherData) => weatherData.dailyWeathers[0])
    );
  }
}
