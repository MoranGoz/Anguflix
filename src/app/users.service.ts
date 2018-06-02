import { Injectable } from '@angular/core';
import {MoviesService} from './movies.service';
import { Budget } from './budget'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  budget: Budget  = new Budget();
 
  constructor() { }
  getBudget():Budget{
    return this.budget ;
  }
  buy(price:number){
    this.budget.budget -= price ;
  }

  return(price:number){
    this.budget.budget += price ;
  }
}
