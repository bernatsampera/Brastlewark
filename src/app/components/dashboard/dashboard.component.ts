import { Component } from '@angular/core';
import { CitizenService } from 'src/app/services/citizen/citizen.service';
import { Observable } from 'rxjs';
import { Citizen } from 'src/app/model/citizen.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {

  citizens$: Observable<Citizen[]> = this.citizenService.citizens$;

  constructor(
    private citizenService: CitizenService,
    private router: Router
  ) {
  }

  selectCitizen(id: number) {
    this.router.navigate([id]);
  }
}
