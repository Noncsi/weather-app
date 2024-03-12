import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressSpinnerService {
  private spinnerSubject = new Subject<boolean>();
  isActive$ = this.spinnerSubject.asObservable();

  toggleSpinnerVisibility(isVisible: boolean) {
    this.spinnerSubject.next(isVisible);
  }
}
