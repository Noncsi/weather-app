import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-spline',
  templateUrl: './spline.component.html',
  styleUrl: './spline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplineComponent {}
