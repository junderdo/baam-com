import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    HomePageComponent,
    ArtistPageComponent
} from './pages';

const routes: Routes = [
    { path: '', component: HomePageComponent, pathMatch: 'full' },
    { path: 'artist', component: ArtistPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
