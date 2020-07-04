import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitizenService } from 'src/app/services/citizen/citizen.service';
import { Observable } from 'rxjs';
import { Citizen } from 'src/app/model/citizen.model';

@Component({
  selector: 'app-citizen-detail',
  templateUrl: './citizen-detail.component.html',
  styleUrls: ['./citizen-detail.component.scss']
})
export class CitizenDetailComponent implements OnInit {

  citizen$: Observable<Citizen> = this.citizenService.selectedCitizen$;

  constructor(
    private route: ActivatedRoute,
    private citizenService: CitizenService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.citizenService.selectCitizen(id);
    });
  }

}
