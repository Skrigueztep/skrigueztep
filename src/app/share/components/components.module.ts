import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const COMPONENTS = [
  NavBarComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class ComponentsModule { }
