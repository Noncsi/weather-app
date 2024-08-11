import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { locationSuggestingMapper } from '../utils';
import { ILocationSuggestions } from '../models/location-suggestions/locations-suggestions';
import { ILocationSuggestionsFromApi } from '../models/location-suggestions/api/location-suggestions-from-api';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  APIKey: string = '22bc9df302ef4364a87c9efc40cd9799';

  getLocationSuggestions(input: string): Observable<ILocationSuggestions> {
    return this.http
      .get<ILocationSuggestionsFromApi>(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&format=json&apiKey=${this.APIKey}`
      )
      .pipe(
        map(locationSuggestingMapper),
        tap(() => console.log('yay'))
      );
  }
}
