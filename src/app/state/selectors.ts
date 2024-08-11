import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IWeatherData } from '../models/weather/weather-data';

export interface AppState {
  weatherData: IWeatherData;
  isLoading: boolean;
  errorMessage: string;
  locationOptions: string[];
}

export const selectState = createFeatureSelector<AppState>('weatherData');

export const selectWeatherData = createSelector(
  selectState,
  (state: AppState) => state?.weatherData
);

export const selectTodaysWeatherData = createSelector(
  selectWeatherData,
  (weatherData: IWeatherData) => weatherData?.dailyWeathers?.[0]
);

export const selectIsLoading = createSelector(
  selectState,
  (state: AppState) => state?.isLoading
);

export const selectErrorMessage = createSelector(
  selectState,
  (state: AppState) => state?.errorMessage
);

export const selectLocationOptions = createSelector(
  selectState,
  (state: AppState) => state?.locationOptions
);
