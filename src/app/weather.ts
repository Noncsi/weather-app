import { TemperaturePosition } from './day-module/models/temperature-position';

export interface WeatherDataFromApi {
  address: string;
  days: {
    datetime: string;
    temp: number;
    tempmax: number;
    tempmin: number;
    conditions: string;
    icon: string;
  }[];
}
export interface WeatherData {
  location: string;
  dailyWeathers: DailyWeather[];
}

export interface DailyWeather {
  dateTime: string;
  temperature: number;
  temperatureMax: number;
  temperatureMin: number;
  shortDescription: string;
  iconName: string;
  tempPosition: TemperaturePosition | null;
}

export enum Interval {
  today = '/today',
  next7days = '/next7days',
  next15days = '',
}
