import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { DailyWeather } from '../../../models/daily-weather';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayComponent implements OnInit {
  @Input() day: DailyWeather;
  iconPath: string;
  max: object;
  min: object;

  ngOnInit(): void {
    this.iconPath = `../../../../assets/weather-icons/${this.day.iconName}.svg`;
    this.max = {
      top: this.day.tempPosition?.max + 'px',
    };

    this.min = {
      top: this.day.tempPosition?.min + 'px',
    };
  }
}
