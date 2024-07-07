import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DailyWeather } from '../../../models/daily-weather';
import { select, Store } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  selectTodaysWeatherData,
  selectWeatherData,
} from '../../../state/selectors';
import { getWeatherData } from '../../../state/actions';
import { WeatherData } from '../../../models/weather-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  weatherData$: Observable<WeatherData>;
  todaysWeather$: Observable<DailyWeather>;

  constructor(private store: Store) {
    this.weatherData$ = this.store.pipe(
      select(selectWeatherData),
      takeUntilDestroyed()
    );

    this.todaysWeather$ = this.store.pipe(
      select(selectTodaysWeatherData),
      takeUntilDestroyed()
    );
  }

  submit(location: string) {
    this.store.dispatch(getWeatherData({ location }));
  }
}
