import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutesModule } from './cv.routes.module';
import { CvComponent } from './pages/cv/cv.component';


@NgModule({
  declarations: [CvComponent],
  imports: [
    CommonModule,
    CvRoutesModule
  ]
})
export class CvModule { }
