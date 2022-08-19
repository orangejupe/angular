import { Component, OnInit, Input } from '@angular/core';
import { MovieType } from '../.././app.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  @Input() movie!: MovieType;

  ngOnInit(): void {
  }  
}
