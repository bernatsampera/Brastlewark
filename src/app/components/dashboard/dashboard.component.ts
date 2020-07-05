import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CitizenService } from 'src/app/services/citizen/citizen.service';
import { Observable, combineLatest, BehaviorSubject, Subject } from 'rxjs';
import { Citizen } from 'src/app/model/citizen.model';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FilterState } from 'src/app/model/filter-state/filter-state.interface';
import { InitialFilterState } from 'src/app/model/filter-state/init-filter-state';
import { RxState } from '@rx-angular/state';

interface DashboardState {
  citizens: [];
  citizensToDisplay: [];
  pagesAvailable: number;
  numberOfResults: number;
  pageSelected: number;
}

const InitialDashboardState: DashboardState = {
  citizens: undefined,
  citizensToDisplay: undefined,
  pagesAvailable: undefined,
  numberOfResults: 96,
  pageSelected: 0
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent extends RxState<DashboardState> {

  baseModel$ = this.select();

  citizensToDisplay$ = this.select('citizensToDisplay');
  pageSelected$ = this.select('pageSelected');
  numberOfResults$ = this.select('numberOfResults');

  citizenFilter$ = new BehaviorSubject<FilterState>(InitialFilterState);
  selectPage$ = new BehaviorSubject<number>(0);

  citizens$: Observable<Citizen[]> = combineLatest([
    this.citizenService.citizens$,
    this.citizenFilter$
  ]).pipe(
    map(([citizens, filter]: [Citizen[], FilterState]) =>
      citizens.filter(
        citizen =>
        (!filter.minAge || citizen.age > filter.minAge) &&
        (!filter.maxAge || citizen.age < filter.maxAge) &&
        (!filter.minHeight || citizen.height > filter.minHeight) &&
        (!filter.maxHeight || citizen.height < filter.maxHeight) &&
        (!filter.minWeight || citizen.weight > filter.minWeight) &&
        (!filter.maxWeight || citizen.weight < filter.maxWeight)
    ))
  );

  constructor(
    private citizenService: CitizenService,
    private router: Router
  ) {
    super();

    this.set(InitialDashboardState);

    this.connect(
      combineLatest([
        this.citizens$,
        this.numberOfResults$
      ]).pipe(map(([elements, numberOfResults]) => ({ pagesAvailable: Math.round(elements.length / numberOfResults) })))
    );

    this.connect(
      this.selectPage$.pipe(map(page => ({ pageSelected: page})))
    );

    this.connect(
      combineLatest([
        this.citizens$,
        this.pageSelected$,
        this.numberOfResults$
      ]).pipe(map(([elements, page, numberOfResults]) =>
        ({ citizensToDisplay: elements.slice(page * numberOfResults, page * numberOfResults + numberOfResults ) }))
      )
    );
  }

  selectCitizen(id: number) {
    this.router.navigate([id]);
  }
}
