import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherData } from '../models/weather-data';

export interface AppState {
  weatherData: WeatherData;
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
