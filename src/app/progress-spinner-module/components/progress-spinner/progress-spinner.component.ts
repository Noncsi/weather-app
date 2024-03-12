import { Component } from '@angular/core';
import { ProgressSpinnerService } from '../../progress-spinner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrl: './progress-spinner.component.scss',
})
export class ProgressSpinnerComponent {
  isActive$: Observable<boolean>;
  constructor(private progressSpinnerService: ProgressSpinnerService) {
    this.isActive$ = this.progressSpinnerService.isActive$;
  }
}
