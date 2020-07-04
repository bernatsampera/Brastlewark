import { Injectable } from '@angular/core';
import { catchError, tap, map, shareReplay } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClientService } from '../cache/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  readonly url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

  selectedCity = 'Brastlewark';

  citiesData$ = this._http.get({url: this.url, cacheMins: 5}).pipe(
    // catchError(_ => of('error retrieving cities'))
  );

  constructor(
    private _http: HttpClientService
  ) {
  }

}
