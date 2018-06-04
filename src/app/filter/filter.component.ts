import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  filterObj = {
    filterString: "",
    filterByYear: null
  };
  
  @Output() filtering: EventEmitter<any> = new EventEmitter();
  constructor() { }


  ngOnInit() {
  }

  onFilterChanged() {
    this.filtering.emit(this.filterObj);
    console.log('filter has changed - looking for '+ this.filterObj)
  }

}

