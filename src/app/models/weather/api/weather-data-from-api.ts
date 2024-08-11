import { IDailyWeatherFromApi } from './daily-weather-from-api';

export interface IWeatherDataFromApi {
  resolvedAddress: string;
  days: IDailyWeatherFromApi[];
}
