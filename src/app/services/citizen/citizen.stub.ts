import { Citizen } from 'src/app/model/citizen.model';
import { Observable, of } from 'rxjs';
import { map, catchError, withLatestFrom, switchMap, mapTo } from 'rxjs/operators';
import { CitizenService } from './citizen.service';

const dummyCityData = {
  'Brastlewark': [
  {
  'id': 0,
  'name': 'Tobus Quickwhistle',
  'thumbnail': 'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
  'age': 306,
  'weight': 39.065952,
  'height': 107.75835,
  'hair_color': 'Pink',
  'professions': [
  'Metalworker',
  'Woodcarver',
  'Stonecarver',
  ' Tinker',
  'Tailor',
  'Potter'
  ],
  'friends': [
  'Cogwitz Chillwidget',
  'Tinadette Chillbuster'
  ]
  },
  {
    'id': 0,
    'name': 'Tobus Quickwhistle',
    'thumbnail': 'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
    'age': 306,
    'weight': 39.065952,
    'height': 107.75835,
    'hair_color': 'Pink',
    'professions': [
    'Metalworker',
    'Woodcarver',
    'Stonecarver',
    ' Tinker',
    'Tailor',
    'Potter'
    ],
    'friends': [
    'Cogwitz Chillwidget',
    'Tinadette Chillbuster'
    ]
    }
  ]};


const dummySelectedCity = 'Brastlewark';

export class CitizenStub {
  citizens$: Observable<Citizen[] | string> = of(dummyCityData).pipe(
    map(cities => cities[dummySelectedCity]),
    map((citizensList: []) => citizensList.map((citizen: any) => {
      const {hair_color, ...citizenProps} = citizen;
      return {...citizenProps, hairColor: hair_color};
    })),
    catchError(_ => of('error retireving citizens'))
  );

  selectedCitizen$: Observable<Citizen | string> = of(0).pipe(
    withLatestFrom(this.citizens$),
    switchMap(([citizenId, citizens]: [number, Citizen[]]) => citizens.filter((citizen: Citizen) => citizen.id === citizenId)),
    catchError(_ => of('error selecting citizen'))
  );
}
