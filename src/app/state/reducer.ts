import { createReducer, on } from '@ngrx/store';
import {
  getWeatherDataSuccess,
  hideProgressSpinner,
  showProgressSpinner,
} from './actions';
import { AppState } from './selectors';

export const initialState: AppState = {
  weatherData: { location: '', dailyWeathers: [] },
  isLoading: false,
};

export const weatherReducer = createReducer(
  initialState,
  on(getWeatherDataSuccess, (state, action) => {
    const baseValue = Math.max(
      ...action.result.dailyWeathers.map(
        (dailyWeather) => dailyWeather.temperatureMax
      )
    );
    return {
      ...state,
      weatherData: {
        ...state.weatherData,
        location: action.result.location,
        dailyWeathers: action.result.dailyWeathers.map((dailyWeather) => ({
          ...dailyWeather,
          tempPosition: {
            max: (baseValue - dailyWeather.temperatureMax) * 11,
            min: (baseValue - dailyWeather.temperatureMin) * 11,
          },
        })),
      },
    };
  }),
  on(showProgressSpinner, (state) => {
    return { ...state, isLoading: true };
  }),
  on(hideProgressSpinner, (state) => {
    return { ...state, isLoading: false };
  })
);
