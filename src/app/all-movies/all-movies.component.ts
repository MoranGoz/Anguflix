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
  text : string = " Buy "
  filterObj = {
    filterString: "",
    filterByYear: null
  };
  
  constructor(private moviesServis : MoviesService) { }

  ngOnInit() {
    this.allMovies =  this.moviesServis.getAllMovies();
  }

  onFilterChanged(filterObj) {
    console.log('all movie recognize that filter chang  ' + filterObj.filterString);
   
  }

   onMovieClick(movie) {
    console.log(movie);
    console.log('onMovieClick from all-movies-component');
    this.moviesServis.addToMyMovies(movie);
  }

}
