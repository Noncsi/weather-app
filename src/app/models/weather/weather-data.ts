import { IDailyWeather } from './daily-weather';

export interface IWeatherData {
  location: string;
  dailyWeathers: IDailyWeather[];
}
