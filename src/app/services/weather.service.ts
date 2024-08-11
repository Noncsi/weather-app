import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { weatherMapper } from '../utils';
import { Interval } from '../models/weather/interval';
import { IWeatherDataFromApi } from '../models/weather/api/weather-data-from-api';
import { IWeatherData } from '../models/weather/weather-data';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherInfo(
    location: string,
    interval: string = Interval.next15days
  ): Observable<IWeatherData> {
    return this.http
      .get<IWeatherDataFromApi>(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}
        ${interval}?unitGroup=metric&include=days%2Ccurrent&key=AWXBV38JZ7D4GFHZUANSZU65X&contentType=json`
      )
      .pipe(map(weatherMapper), shareReplay());
  }
}
