import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IDailyWeather } from '../../../models/weather/daily-weather';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day',
  standalone: true,
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class DayComponent implements OnInit {
  @Input() day: IDailyWeather;
  iconPath: string;
  max: object;
  min: object;

  ngOnInit(): void {
    this.iconPath = `assets/weather-icons/${this.day.iconName}.svg`;
    this.max = {
      top: this.day.tempPosition?.max + 'px',
    };

    this.min = {
      top: this.day.tempPosition?.min + 'px',
    };
  }
}
