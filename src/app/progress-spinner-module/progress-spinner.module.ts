import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ProgressSpinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [ProgressSpinnerComponent],
})
export class ProgressSpinnerModule {}
