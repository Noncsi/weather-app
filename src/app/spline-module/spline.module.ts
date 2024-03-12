import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SplineComponent } from './components/spline/spline.component';

@NgModule({
  declarations: [SplineComponent],
  exports: [SplineComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SplineModule {}
