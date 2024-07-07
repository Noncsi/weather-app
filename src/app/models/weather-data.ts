import { DailyWeather } from './daily-weather';

export interface WeatherData {
  location: string;
  dailyWeathers: DailyWeather[];
}
