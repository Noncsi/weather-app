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
