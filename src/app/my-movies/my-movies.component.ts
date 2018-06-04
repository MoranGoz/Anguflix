import { Component, OnInit, Input } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../movie' 


@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {

  myMovies = new Array<Movie>();
  text: string = "Remove" ;
  filterObj = {filterString:""};
  

  constructor(private moviesServis : MoviesService) { }

  ngOnInit(){
    this.myMovies=this.moviesServis.getMyMovies();
  }
  onMovieClick(movie) {
    console.log(movie);
    console.log('onMovieClick from all-movies-component');
    this.moviesServis.removeFromMyMovies(movie);
  }

  onFilterChanged(filterObj) {
    this.filterObj = filterObj;
  }


}
