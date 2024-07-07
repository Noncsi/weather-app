import { createReducer, on } from '@ngrx/store';
import { getWeatherDataSuccess } from './actions';
import { AppState } from './selectors';

export const initialState: AppState = {
  weatherData: { location: '', dailyWeathers: [] },
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
        dailyWeathers: action.result.dailyWeathers.map((dailyWeather) => ({
          ...dailyWeather,
          tempPosition: {
            max: (baseValue - dailyWeather.temperatureMax) * 11,
            min: (baseValue - dailyWeather.temperatureMin) * 11,
          },
        })),
      },
    };
  })
);
