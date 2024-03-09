import { WeatherData, WeatherDataFromApi } from './weather';

export function weatherMapper(data: WeatherDataFromApi): WeatherData {
  return {
    location: data.address,
    dailyWeathers: data.days.map((day) => ({
      dateTime: day.datetime,
      temperature: Math.round(day.temp),
      temperatureMax: Math.round(day.tempmax),
      temperatureMin: Math.round(day.tempmin),
      iconName: day.icon,
      shortDescription: day.conditions,
      tempPosition: null,
    })),
  };
}
