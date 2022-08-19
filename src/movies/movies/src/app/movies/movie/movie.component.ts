import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieType } from '../.././app.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Output() favoriteChanged = new EventEmitter<{ movie: MovieType, index: number }>();
  @Input() movie!: MovieType;
  @Input() index!: number;

  constructor() {
  }

  
  OnFavoriteChanged() {
    this.favoriteChanged.emit({ movie: this.movie, index: this.index });
  }
  ngOnInit(): void {
  }  
}
