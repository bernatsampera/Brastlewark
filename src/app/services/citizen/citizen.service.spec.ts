import { TestBed, getTestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CitizenService } from './citizen.service';
import { Citizen } from 'src/app/model/citizen.model';
import { CityService } from '../city/city.service';
import { of } from 'rxjs';

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

const dummyCitizensData: Citizen[] = [{
  id: 0,
  name: 'Tobus Quickwhistle',
  thumbnail: 'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
  age: 306,
  weight: 39.065952,
  height: 107.75835,
  professions: ['Metalworker', 'Woodcarver', 'Stonecarver', ' Tinker', 'Tailor', 'Potter'],
  friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
  hairColor: 'Pink',
},
{
  id: 0,
  name: 'Tobus Quickwhistle',
  thumbnail: 'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
  age: 306,
  weight: 39.065952,
  height: 107.75835,
  professions: ['Metalworker', 'Woodcarver', 'Stonecarver', ' Tinker', 'Tailor', 'Potter'],
  friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
  hairColor: 'Pink',
}];

const dummySelectedCitizen: Citizen = {
  id: 0,
  name: 'Tobus Quickwhistle',
  thumbnail: 'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
  age: 306,
  weight: 39.065952,
  height: 107.75835,
  professions: ['Metalworker', 'Woodcarver', 'Stonecarver', ' Tinker', 'Tailor', 'Potter'],
  friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
  hairColor: 'Pink',
};

export class CityStub {
  readonly url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

  selectedCity = 'Brastlewark';

  citiesData$ = of(dummyCityData);
}

describe('CitizensService', () => {
  let service: CitizenService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: CitizenService, useClass: CitizenService},
        {provide: CityService, useClass: CityStub},
      ]
    });
    service = TestBed.inject(CitizenService);
  });

  beforeEach(() => scheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  }));

  it('should return the right list of citizens', () => {
    scheduler.run(({expectObservable}) => {
      const expectedMarble = '(a|)';
      const expectedData = {a: dummyCitizensData};

      expectObservable(service.citizens$).toBe(expectedMarble, expectedData);
    });
  });

  it('should return the selected citizen', () => {
    scheduler.run(({expectObservable}) => {
      const expectedMarble = '(aa)';
      const expectedData = {a: dummySelectedCitizen};

      service.selectCitizen(0);

      expectObservable(service.selectedCitizen$).toBe(expectedMarble, expectedData);
    });
  });
});

