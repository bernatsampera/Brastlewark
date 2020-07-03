import { Component } from '@angular/core';
import { CitizenService } from 'src/app/services/citizen/citizen.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Citizen } from 'src/app/model/citizen.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {

  citizens$: Observable<Citizen[]  | string> = this.citizenService.citizens$;

  constructor(
    private citizenService: CitizenService
  ) {
  }
}
