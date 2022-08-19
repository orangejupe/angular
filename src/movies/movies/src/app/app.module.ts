import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar.component/navbar.component.component';
import { MoviesComponentComponent } from './movies.component/movies.component.component';
import { CreatemovieComponentComponent } from './createmovie.component/createmovie.component.component';
import { MovieComponentComponent } from './Movies/movie.component/movie.component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    MoviesComponentComponent,
    CreatemovieComponentComponent,
    MovieComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
