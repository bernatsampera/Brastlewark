import { TestBed, getTestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CitizenService } from './citizen.service';
import { CitizenStub } from './citizen.stub';
import { Citizen } from 'src/app/model/citizen.model';

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


describe('CitizensService', () => {
  let injector: TestBed;
  let citizenStub: CitizenStub;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: CitizenService, useClass: CitizenStub}],
      imports: [HttpClientTestingModule],
    });

    injector = getTestBed();
    citizenStub = injector.get(CitizenService);
  });

  beforeEach(() => scheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  }));

  it('should return the right list of citizens', () => {
    scheduler.run(({expectObservable}) => {
      const expectedMarble = '(a|)';
      const expectedData = {a: dummyCitizensData};

      expectObservable(citizenStub.citizens$).toBe(expectedMarble, expectedData);
    });
  });

  it('should return the selected citizen', () => {
    scheduler.run(({expectObservable}) => {
      const expectedMarble = '(aa|)';
      const expectedData = {a: dummySelectedCitizen};

      expectObservable(citizenStub.selectedCitizen$).toBe(expectedMarble, expectedData);
    });
  });

});

