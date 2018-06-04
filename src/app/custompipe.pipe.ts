import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'custompipe',
  pure: false
})
export class CustompipePipe implements PipeTransform {

  transform(movies: any, filterObj: any): any {
    if (filterObj.filterString === undefined && filterObj.filterByYear === undefined) {
      return movies;
    }  else{
      return movies.filter(function (movie) {
        return ( !filterObj.filterByYear || movie.year == filterObj.filterByYear) &&
          movie.title.toLowerCase().includes(filterObj.filterString.toLowerCase());
      })
    }
  } 
}