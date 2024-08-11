import {
  combineLatest,
  debounceTime,
  filter,
  map,
  Observable,
  startWith,
  tap,
} from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IDailyWeather as WeatherDataToday } from '../../../models/weather/daily-weather';
import { select, Store } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  selectIsLoading,
  selectLocationOptions,
  selectTodaysWeatherData,
  selectWeatherData,
} from '../../../state/selectors';
import { getLocationSuggestions, getWeatherData } from '../../../state/actions';
import { DatePipe } from '@angular/common';
import { IWeatherData } from '../../../models/weather/weather-data';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  today: string | null;
  weatherData8Days$: Observable<IWeatherData>;
  weatherDataToday$: Observable<WeatherDataToday>;

  isLoading$: Observable<boolean>;

  locationForm = new FormControl('');
  options$: Observable<string[]>;
  filteredOptions$: Observable<string[]>;

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

    this.options$ = this.store.pipe(
      select(selectLocationOptions),
      takeUntilDestroyed()
    );

    this.locationForm.valueChanges
      .pipe(
        debounceTime(500),
        tap((value) =>
          this.store.dispatch(getLocationSuggestions({ input: value ?? '' }))
        ),
        takeUntilDestroyed()
      )
      .subscribe();
  }

  ngOnInit() {}

  submit(location: string) {
    this.store.dispatch(getWeatherData({ location }));
  }
}
