export interface IDailyWeatherFromApi {
  datetime: string;
  temp: number;
  tempmax: number;
  tempmin: number;
  conditions: string;
  icon: string;
}
