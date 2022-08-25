import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models';

interface ChangedMovie {
  movie: Movie;
  index: number;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  @Input() movies!: Array<Movie>;
  @Output() arrayChanged = new EventEmitter<Array<Movie>>();
  changedMovie!: ChangedMovie

  onFavoriteChanged(data: any) {
    this.changedMovie = data;
    this.movies[this.changedMovie.index] = this.changedMovie.movie;
    this.arrayChanged.emit(this.movies);
  }
}
