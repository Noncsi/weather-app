import { NgModule } from '@angular/core';
import { DayComponent } from './components/day/day.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DayComponent],
  imports: [CommonModule],
  exports: [DayComponent],
})
export class DayModule {}
