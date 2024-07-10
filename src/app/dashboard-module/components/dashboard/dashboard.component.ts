import { Observable, tap } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DailyWeather as WeatherDataToday } from '../../../models/daily-weather';
import { select, Store } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  selectIsLoading,
  selectTodaysWeatherData,
  selectWeatherData,
} from '../../../state/selectors';
import { getWeatherData } from '../../../state/actions';
import { WeatherData } from '../../../models/weather-data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  today: string | null;
  weatherData8Days$: Observable<WeatherData>;
  weatherDataToday$: Observable<WeatherDataToday>;
  isLoading$: Observable<boolean>;

  constructor(private datePipe: DatePipe, private store: Store) {
    this.today = this.datePipe.transform(new Date(), 'YYYY. MMMM dd., EEEE');

    this.weatherData8Days$ = this.store.pipe(
      select(selectWeatherData),
      tap((result) => console.log(result)),
      takeUntilDestroyed()
    );

    this.weatherDataToday$ = this.store.pipe(
      select(selectTodaysWeatherData),
      takeUntilDestroyed()
    );

    this.isLoading$ = this.store.pipe(
      select(selectIsLoading),
      takeUntilDestroyed()
    );
  }

  submit(location: string) {
    this.store.dispatch(getWeatherData({ location }));
  }
}
