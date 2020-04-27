import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./ui/landing/landing.module').then(m => m.LandingModule) },
  { path: 'cv', loadChildren: () => import('./ui/cv/cv.module').then(m => m.CvModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
