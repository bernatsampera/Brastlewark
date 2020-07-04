import { Component } from '@angular/core';
import { CitizenService } from 'src/app/services/citizen/citizen.service';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { Citizen } from 'src/app/model/citizen.model';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FilterState } from 'src/app/model/filter-state/filter-state.interface';
import { InitialFilterState } from 'src/app/model/filter-state/init-filter-state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {

  citizenFilter$ = new BehaviorSubject<FilterState>(InitialFilterState);

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
    this.citizenFilter$.subscribe(console.log);

  }

  selectCitizen(id: number) {
    this.router.navigate([id]);
  }
}
