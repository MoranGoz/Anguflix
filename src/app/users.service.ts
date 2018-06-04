import { Injectable } from '@angular/core';
import {MoviesService} from './movies.service';
import { Budget } from './budget'

const MYMOVIES = []; 
let budget: Budget  = new Budget();

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor() { }
  getBudget():Budget{
    return budget ;
  }
  buy(price:number){
    budget.budget -= price ;
  }
  return(price:number){
    budget.budget += price ;
  }
}
