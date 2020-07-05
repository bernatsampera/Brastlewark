import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  Arr = Array;
  @Input() pagesAvailable: number;
  @Input() selectedPage: number;

  @Output() selectPageEmitter = new EventEmitter<number>();

  constructor( ) { }

  selectPage(page: number): void {
    this.selectPageEmitter.emit(page);
  }

}
