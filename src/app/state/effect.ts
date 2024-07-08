import { WeatherService } from './../services/weather.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import {
  getWeatherData,
  getWeatherDataSuccess,
  hideProgressSpinner,
  showProgressSpinner,
} from './actions';

@Injectable({ providedIn: 'root' })
export class WeatherDataEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  loadWeatherData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getWeatherData),
      switchMap((action) =>
        this.weatherService
          .getWeatherInfo(action.location)
          .pipe(map((result) => getWeatherDataSuccess({ result })))
      )
    )
  );

  startLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getWeatherData),
      map(() => showProgressSpinner())
    )
  );

  hideLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getWeatherDataSuccess),
      map(() => hideProgressSpinner())
    )
  );
}
