import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Citizen } from 'src/app/model/citizen.model';

@Component({
  selector: 'app-citizen-list',
  templateUrl: './citizen-list.component.html',
  styleUrls: ['./citizen-list.component.scss']
})
export class CitizenListComponent implements OnInit {

  @Input() citizens$: Observable<Citizen[]>;
  @Output() selectCitizenEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCitizen(id: number) {
    this.selectCitizenEvent.emit(id);
  }
}
