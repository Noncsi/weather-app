import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LocationComponent } from './components/location/location.component';

@NgModule({
  declarations: [LocationComponent],
  imports: [MatFormFieldModule, MatInputModule],
  exports: [LocationComponent],
})
export class LocationModule {}
