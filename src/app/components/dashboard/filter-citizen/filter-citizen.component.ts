import { Component, Output, EventEmitter } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { FilterState } from 'src/app/model/filter-state/filter-state.interface';
import { Subject } from 'rxjs';
import { map, delay, debounceTime } from 'rxjs/operators';
import { InitialFilterState } from 'src/app/model/filter-state/init-filter-state';

@Component({
  selector: 'app-filter-citizen',
  templateUrl: './filter-citizen.component.html',
  styleUrls: ['./filter-citizen.component.scss']
})
export class FilterCitizenComponent extends RxState<FilterState>  {

  @Output() citizenFilter$ = this.select();

  setMinAge$ = new Subject();
  setMaxAge$ = new Subject();

  setMinHeight$ = new Subject();
  setMaxHeight$ = new Subject();

  setMinWeight$ = new Subject();
  setMaxWeight$ = new Subject();


  constructor(
    ) {
    super();

    this.set(InitialFilterState);

    this.connect(
      this.setMinAge$.pipe(debounceTime(500), map((e: any) => ({ minAge: e.target.value}) ))
    );

    this.connect(
      this.setMaxAge$.pipe(debounceTime(500), map((e: any) => ({ maxAge: e.target.value}) ))
    );

    this.connect(
      this.setMinHeight$.pipe(debounceTime(500), map((e: any) => ({ minHeight: e.target.value}) ))
    );

    this.connect(
      this.setMaxHeight$.pipe(debounceTime(500), map((e: any) => ({ maxHeight: e.target.value}) ))
    );

    this.connect(
      this.setMinWeight$.pipe(debounceTime(500), map((e: any) => ({ minWeight: e.target.value}) ))
    );

    this.connect(
      this.setMaxWeight$.pipe(debounceTime(500), map((e: any) => ({ maxWeight: e.target.value}) ))
    );
  }

}
