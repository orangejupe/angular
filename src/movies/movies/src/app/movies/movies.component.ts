import { Component, OnInit, Input, Output } from '@angular/core';
import { MovieType } from '.././app.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  @Input() movies!: Array<MovieType>;

  ngOnInit(): void {
  }

}
