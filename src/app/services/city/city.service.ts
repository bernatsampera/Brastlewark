import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  readonly url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

  selectedCity = 'Brastlewark';

  citiesData$ = this._http.get(this.url).pipe(
  );

  constructor(
    private _http: HttpClientService
  ) {
  }

}
