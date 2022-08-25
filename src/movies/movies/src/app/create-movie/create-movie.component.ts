import { Component, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent {
  @Output() movieCreated = new EventEmitter<Movie>();
  movie?: Movie;
  title: string = '';
  description: string = '';

  onCreateMovie() {
    this.movie = {
      title: this.title,
      description: this.description,
      favorite: false,
    }
    this.title = '';
    this.description = '';
    this.movieCreated.emit(this.movie);
  }
}
