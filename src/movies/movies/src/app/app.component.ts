import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'movies';
  constructor() {
    this.movies = [];
    for (let i = 0; i < 10; i++) {
      this.movie = {
        Title: "Title " + i.toString(),
        Description: "Description " + i.toString(),
        Favorite: Boolean(i % 2),
      }
      this.movies.push(this.movie);
    }
  }
  movie!: MovieType;
  movies: Array<MovieType>;
  onMovieCreated(movie: MovieType) {
    this.movies.push(movie);
  };

  OnArrayChaned(movies: Array<MovieType>) {
    this.movies = movies;
  }
}
export type MovieType = {
  Title: string;
  Description: string;
  Favorite: boolean;
}
