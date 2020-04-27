import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutesModule } from './landing.routes.module';
import { LandingComponent } from './pages/landing/landing.component';
import {ShareModule} from '../../share/share.module';
import {MaterialModule} from '../../core/modules/material/material.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutesModule,
    ShareModule,
    MaterialModule
  ]
})
export class LandingModule { }
