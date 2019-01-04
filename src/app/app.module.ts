import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* app modules */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* app components */
import {
    MediaPlayerComponent
} from './components';

/* app page components */
import {
    ArtistPageComponent
} from './pages';

@NgModule({
  declarations: [
    AppComponent,
    MediaPlayerComponent,
    ArtistPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
