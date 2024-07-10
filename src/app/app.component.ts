import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectErrorMessage } from './state/selectors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'weather-app';
  showErrorMessage: Observable<string>;

  constructor(private store: Store) {
    this.showErrorMessage = this.store.pipe(
      select(selectErrorMessage),
      takeUntilDestroyed()
    );
  }
}
