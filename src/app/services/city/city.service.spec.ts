import { TestBed, getTestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable } from 'rxjs';
import { CityService } from './city.service';

const dummyCityData = {
  "Brastlewark": [
  {
  "id": 0,
  "name": "Tobus Quickwhistle",
  "thumbnail": "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
  "age": 306,
  "weight": 39.065952,
  "height": 107.75835,
  "hair_color": "Pink",
  "professions": [
  "Metalworker",
  "Woodcarver",
  "Stonecarver",
  " Tinker",
  "Tailor",
  "Potter"
  ],
  "friends": [
  "Cogwitz Chillwidget",
  "Tinadette Chillbuster"
  ]
  },
  ]};

class CityStub {
  citiesData$ = of(dummyCityData);
}

describe('CityService', () => {
  let injector: TestBed;
  let dataStub: CityStub;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: CityService, useClass: CityStub}],
      imports: [HttpClientTestingModule],
    });

    injector = getTestBed();
    dataStub = injector.get(CityService);
  });

  beforeEach(() => scheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  }));

  it('should be created', () => {
    expect(CityService).toBeTruthy();
  });

  it('should return the right data', () => {
    scheduler.run(({expectObservable}) => {
      const expectedMarble = '(a|)';
      const expectedData = {a: dummyCityData};

      expectObservable(dataStub.citiesData$).toBe(expectedMarble, expectedData);
    });

  });

});

