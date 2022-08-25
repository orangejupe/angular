import { Component } from '@angular/core';
import { Movie } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'movies';
  movie!: Movie;
  movies: Array<Movie>;

  constructor() {
    this.movies = [];
    for (let i = 0; i < 10; i++) {
      this.movie = {
        title: "Title " + i.toString(),
        description: "Description " + i.toString(),
        favorite: Boolean(i % 2),
      }
      this.movies.push(this.movie);
    }
  }
  
  onMovieCreated(movie: Movie) {
    this.movies.push(movie);
  };

  onArrayChaned(movies: Array<Movie>) {
    this.movies = movies;
  }
}
