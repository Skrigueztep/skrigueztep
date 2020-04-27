import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutesModule } from './landing.routes.module';
import { LandingComponent } from './pages/landing/landing.component';
import {ShareModule} from '../../share/share.module';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutesModule,
    ShareModule
  ]
})
export class LandingModule { }
