import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Movie} from '../movie' 


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  //filterTerm : string;
  @Input() text: string  = '';
  @Input() movie: Movie  = new Movie();
  @Output() movieChosen : EventEmitter<Movie> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onMovieClick() {
    this.movieChosen.emit(this.movie);
  } 
}
