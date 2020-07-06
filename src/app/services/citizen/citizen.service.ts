import { Injectable } from '@angular/core';
import { catchError, tap, map, shareReplay, switchMap, withLatestFrom } from 'rxjs/operators';
import { of, Observable, combineLatest, Subject, BehaviorSubject, throwError } from 'rxjs';
import { CityService } from '../city/city.service';
import { Citizen } from 'src/app/model/citizen.model';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {

  selectCitizenIdAction = new BehaviorSubject<number>(0);

  citizens$: Observable<Citizen[]> = this._cityService.citiesData$.pipe(
    map(cities => cities[this._cityService.selectedCity]),
    map((citizensList: []) => citizensList.map((citizen: any) => {
      const {hair_color, ...citizenProps} = citizen;
      return {...citizenProps, hairColor: hair_color};
    })),
    catchError(err =>  throwError(err)),
    shareReplay(1)
  );

  selectedCitizen$: Observable<Citizen> = this.selectCitizenIdAction.pipe(
    withLatestFrom(this.citizens$),
    switchMap(([citizenId, citizens]: [number, Citizen[]]) => citizens.filter((citizen: Citizen) => citizen.id === citizenId)),
    catchError(err =>  throwError(err)),
  );

  constructor(
    private _cityService: CityService
  ) {
  }

  selectCitizen(id: number): void {
    this.selectCitizenIdAction.next(id);
  }

  getCitizenByName(name: string): Observable<Citizen> {
    return this.citizens$.pipe(
      map((citizens: Citizen[]) => citizens.filter(citizen => citizen.name === name)[0])
    );
  }
}
