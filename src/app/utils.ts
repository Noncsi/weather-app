import { ILocationSuggestionsFromApi } from './models/location-suggestions/api/location-suggestions-from-api';
import { ILocationSuggestions } from './models/location-suggestions/locations-suggestions';
import { IWeatherDataFromApi } from './models/weather/api/weather-data-from-api';
import { IWeatherData } from './models/weather/weather-data';

export function weatherMapper(data: IWeatherDataFromApi): IWeatherData {
  return {
    location: data.resolvedAddress,
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

export function locationSuggestingMapper(
  data: ILocationSuggestionsFromApi
): ILocationSuggestions {
  return {
    locationSuggestions: data.results.map((result) => result.formatted),
  };
}
