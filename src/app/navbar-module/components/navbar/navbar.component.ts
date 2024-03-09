import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WeatherService } from '../../../weather.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  constructor(private weatherService: WeatherService) {}
  go(location: string) {
    this.weatherService.getWeatherInfo(location).subscribe();
  }
}
