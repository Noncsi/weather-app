import { TemperaturePosition } from '../../day-module/models/temperature-position';

export interface IDailyWeather {
  dateTime: string;
  temperature: number;
  temperatureMax: number;
  temperatureMin: number;
  shortDescription: string;
  iconName: string;
  tempPosition: TemperaturePosition | null;
}
