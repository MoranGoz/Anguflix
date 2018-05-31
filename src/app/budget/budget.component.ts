import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
 budget:number=100;

 //@Input() price: number ;
 //@Output() filtering : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updatePurchase(){

  }

  returnPurchase(){

  }
}
