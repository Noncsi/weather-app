import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherData } from '../models/weather-data';

export interface AppState {
  weatherData: WeatherData;
  isLoading: boolean;
}

export const selectState = createFeatureSelector<AppState>('weatherData');

export const selectWeatherData = createSelector(
  selectState,
  (state: AppState) => state?.weatherData
);

export const selectTodaysWeatherData = createSelector(
  selectWeatherData,
  (weatherData: WeatherData) => weatherData?.dailyWeathers?.[0]
);

export const selectIsLoading = createSelector(
  selectState,
  (state: AppState) => state?.isLoading
);
