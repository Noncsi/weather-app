import { WeatherService } from './../services/weather.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { getWeatherData, getWeatherDataSuccess } from './actions';
import { WeatherData } from '../models/weather-data';

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
}
