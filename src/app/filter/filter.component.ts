import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../movie' 

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  @Input() filter: string ;
  @Output() filtering : EventEmitter<string> = new EventEmitter();
  constructor() { }


  ngOnInit() {
  }
 
  onFilterChanged() {
    this.filtering.emit(this.filter);
  }
 
}

