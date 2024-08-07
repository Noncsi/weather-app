import { createAction, props } from '@ngrx/store';
import { WeatherData } from '../models/weather-data';

export const getWeatherData = createAction(
  'getWeatherData',
  props<{ location: string }>()
);

export const getWeatherDataSuccess = createAction(
  'getWeatherDataSuccess',
  props<{ result: WeatherData }>()
);

export const showProgressSpinner = createAction('showProgressSpinner');

export const hideProgressSpinner = createAction('hideProgressSpinner');

export const showErrorMessage = createAction(
  'showErrorMessage',
  props<{ errorMessage: string }>()
);

export const hideErrorMessage = createAction('hideErrorMessage');
