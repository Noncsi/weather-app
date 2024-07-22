import { WeatherService } from './../services/weather.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import {
  getWeatherData,
  getWeatherDataSuccess,
  hideErrorMessage,
  hideProgressSpinner,
  showErrorMessage,
  showProgressSpinner,
} from './actions';
import { of } from 'rxjs';

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
        this.weatherService.getWeatherInfo(action.location).pipe(
          map((result) => getWeatherDataSuccess({ result })),
          catchError(() =>
            of(
              showErrorMessage({
                errorMessage: 'Could not find location. Please try again.',
              })
            )
          )
        )
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
      ofType(getWeatherDataSuccess, showErrorMessage),
      map(() => hideProgressSpinner())
    )
  );

  hideErrorMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showErrorMessage),
      delay(5000),
      map(() => hideErrorMessage())
    )
  );
}
