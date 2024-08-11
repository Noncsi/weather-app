import { createAction, props } from '@ngrx/store';
import { IWeatherData } from '../models/weather/weather-data';
import { ILocationSuggestions } from '../models/location-suggestions/locations-suggestions';

export const getLocationSuggestions = createAction(
  'getLocationSuggestions',
  props<{ input: string }>()
);

export const getLocationSuggestionsSuccess = createAction(
  'getLocationSuggestionsSuccess',
  props<{ result: ILocationSuggestions }>()
);

export const getWeatherData = createAction(
  'getWeatherData',
  props<{ location: string }>()
);

export const getWeatherDataSuccess = createAction(
  'getWeatherDataSuccess',
  props<{ result: IWeatherData }>()
);

export const showProgressSpinner = createAction('showProgressSpinner');

export const hideProgressSpinner = createAction('hideProgressSpinner');

export const showErrorMessage = createAction(
  'showErrorMessage',
  props<{ errorMessage: string }>()
);

export const hideErrorMessage = createAction('hideErrorMessage');
