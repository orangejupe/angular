import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieType } from '.././app.component';


@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.css']
})
export class CreatemovieComponent implements OnInit {
  constructor() {
  }
  @Output() movieCreated = new EventEmitter<MovieType>();
  movie!: MovieType;
  title: string = '';
  description: string = '';

  ngOnInit(): void {
  }

  onCreateMovie() {
    this.movie = {
      Title: this.title,
      Description: this.description,
      Favorite: false,
    }
    this.title = '';
    this.description = '';
    this.movieCreated.emit(this.movie);
  }
}
