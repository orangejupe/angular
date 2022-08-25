import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() movie!: Movie;
  @Input() index!: number;
  @Output() favoriteChanged = new EventEmitter<{ movie: Movie, index: number }>();
  
  onFavoriteChanged() {
    this.favoriteChanged.emit({ movie: this.movie, index: this.index });
  }
}
