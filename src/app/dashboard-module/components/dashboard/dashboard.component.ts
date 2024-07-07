import { Observable, Subject, finalize, map, switchMap, tap } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WeatherData, DailyWeather } from '../../../weather';
import { WeatherService } from '../../../weather.service';
import { TemperaturePosition } from '../../../day-module/models/temperature-position';
import { ProgressSpinnerService } from '../../../progress-spinner-module/progress-spinner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  weatherData$: Observable<WeatherData>;
  todaysWeather$: Observable<DailyWeather>;
  tempPosition$: Observable<TemperaturePosition[]>;
  private _locationSubject = new Subject<string>();

  shouldLoad$ = this._locationSubject.asObservable().pipe(
    tap(() => this.progressSpinnerService.toggleSpinnerVisibility(true)),
    switchMap((location: string) =>
      this.weatherService
        .getWeatherInfo(location)
        .pipe(
          finalize(() =>
            this.progressSpinnerService.toggleSpinnerVisibility(false)
          )
        )
    )
  );

  constructor(
    private weatherService: WeatherService,
    private progressSpinnerService: ProgressSpinnerService
  ) {
    this.weatherData$ = this.weatherService.weatherInfo$.pipe(
      map((weatherData) => {
        const baseValue = Math.max(
          ...weatherData.dailyWeathers.map(
            (dailyWeather) => dailyWeather.temperatureMax
          )
        );
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

  submit(location: string) {
    this._locationSubject.next(location);
  }
}
