import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service'
import { Budget } from '../budget'

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
 
 budget :Budget = new Budget();

 //@Input() price: number ;
 //@Output() filtering : EventEmitter<string> = new EventEmitter();

  constructor(private usersServis : UsersService) { }

  ngOnInit() {
    this.budget = this.usersServis.getBudget();
  }

 
}
