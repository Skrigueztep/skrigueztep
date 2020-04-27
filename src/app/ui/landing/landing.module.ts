import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutesModule } from './landing.routes.module';
import { LandingComponent } from './pages/landing/landing.component';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutesModule
  ]
})
export class LandingModule { }
