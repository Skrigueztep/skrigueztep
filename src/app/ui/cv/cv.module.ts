import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutesModule } from './cv.routes.module';
import { CvComponent } from './pages/cv/cv.component';
import {ShareModule} from '../../share/share.module';
import {MaterialModule} from '../../core/modules/material/material.module';


@NgModule({
  declarations: [CvComponent],
  imports: [
    CommonModule,
    CvRoutesModule,
    ShareModule,
    MaterialModule
  ]
})
export class CvModule { }
