import { Component, OnInit, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sort-citizen',
  templateUrl: './sort-citizen.component.html',
  styleUrls: ['./sort-citizen.component.scss']
})
export class SortCitizenComponent implements OnInit {

  @Output() sortEvent$ = new Subject<Sort>();

  constructor() { }

  ngOnInit(): void {
  }

  sortData(sort: Sort) {
    this.sortEvent$.next(sort);
  }

}
