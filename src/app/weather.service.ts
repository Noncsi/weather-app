import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, shareReplay, tap } from 'rxjs';
import { WeatherData, WeatherDataFromApi, Interval } from './weather';
import { HttpClient } from '@angular/common/http';
import { weatherMapper } from './utils';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherInfoSubject$ = new Subject<WeatherData>();
  weatherInfo$ = this.weatherInfoSubject$.asObservable();
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
        tap((weatherData) => this.weatherInfoSubject$.next(weatherData)),
        shareReplay()
      );
  }
}
