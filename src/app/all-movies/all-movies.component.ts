import { Component, OnInit, Input } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../movie' 

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {

  allMovies = new Array<Movie>();
  filterTerm : string;
  text : string = " Buy "

  constructor(private moviesServis : MoviesService) { }

  ngOnInit() {
    this.allMovies =  this.moviesServis.getAllMovies();
  }

  // onFilterChanged() {
  //   this.router.navigate(['.'], { queryParams: { name: this.filterTerm }});
  // }

   onMovieClick(movie) {
    console.log(movie);
    console.log('onMovieClick from all-movies-component');
    this.moviesServis.addToMyMovies(movie);
  }

}
