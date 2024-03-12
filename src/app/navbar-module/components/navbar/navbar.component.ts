import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WeatherService } from '../../../weather.service';
import { ProgressSpinnerService } from '../../../progress-spinner-module/progress-spinner.service';
import { Subject, finalize, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private _locationSubject = new Subject<string>();

  shouldLoad$ = this._locationSubject.asObservable().pipe(
    tap(() => this.progressSpinnerService.toggleSpinnerVisibility(true)),
    switchMap((location: string) =>
      this.weatherService
        .getWeatherInfo(location)
        .pipe(
          finalize(() =>
            this.progressSpinnerService.toggleSpinnerVisibility(false)
          )
        )
    )
  );

  constructor(
    private weatherService: WeatherService,
    private progressSpinnerService: ProgressSpinnerService
  ) {}

  submit(location: string) {
    this._locationSubject.next(location);
  }
}
