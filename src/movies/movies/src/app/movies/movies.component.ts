import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieType } from '.././app.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Output() arrayChanged = new EventEmitter<Array<MovieType>>();
  constructor() { }

  @Input() movies!: Array<MovieType>;

  ngOnInit(): void {
  }
  changedMovie!: ChangedMovieType
  

  onFavoriteChanged(data: any) {
    this.changedMovie = data;
    this.movies[this.changedMovie.index] = this.changedMovie.movie;
    this.arrayChanged.emit(this.movies);
  }
}

export type ChangedMovieType = {
  movie: MovieType;
  index: number;
}
