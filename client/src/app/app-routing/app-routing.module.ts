import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './../home-page/home-page.component'
import { PublicPageComponent } from './../public-page/public-page.component'
import { PrivatePageComponent } from './../private-page/private-page.component'

// update the route array with these
const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'public', component: PublicPageComponent},
  {path: 'private', component: PrivatePageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
