/* angular core modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* third party modules */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // bootstrap

/* app core modules */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* app components */
import {
    ArtistBioComponent,
    MediaPlayerComponent
} from './components';

/* app pages */
import {
    HomePageComponent,
    ArtistPageComponent
} from './pages';

@NgModule({
  declarations: [
    AppComponent,
    ArtistBioComponent,
    MediaPlayerComponent,
    HomePageComponent,
    ArtistPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
