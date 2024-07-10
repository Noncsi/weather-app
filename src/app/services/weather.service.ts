import { Injectable } from '@angular/core';
import { Observable, map, shareReplay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { weatherMapper } from '../utils';
import { Interval } from '../models/interval';
import { WeatherData } from '../models/weather-data';
import { WeatherDataFromApi } from '../models/weather-data-from-api';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherInfo(
    location: string,
    interval: string = Interval.next7days
  ): Observable<WeatherData> {
    return this.http
      .get<WeatherDataFromApi>(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}
        ${interval}?unitGroup=metric&include=days%2Ccurrent&key=AWXBV38JZ7D4GFHZUANSZU65X&contentType=json`
      )
      .pipe(
        // catchError(),
        map((result) => weatherMapper(result)),
        shareReplay()
      );
  }
}
