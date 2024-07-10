import { DailyWeather as DailyWeatherData } from './daily-weather';

export interface WeatherData {
  location: string;
  dailyWeathers: DailyWeatherData[];
}
