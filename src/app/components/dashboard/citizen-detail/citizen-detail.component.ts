import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitizenService } from 'src/app/services/citizen/citizen.service';
import { Observable, Subject } from 'rxjs';
import { Citizen } from 'src/app/model/citizen.model';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-citizen-detail',
  templateUrl: './citizen-detail.component.html',
  styleUrls: ['./citizen-detail.component.scss']
})
export class CitizenDetailComponent implements OnDestroy{

  private readonly destroy$ = new Subject();
  citizen$: Observable<Citizen> = this.citizenService.selectedCitizen$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private citizenService: CitizenService,
    private location: Location
  ) {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.citizenService.selectCitizen(id);
    });
  }

  previousPage() {
    this.location.back();
  }

  selectFriend(name: string) {
    this.citizenService.getCitizenByName(name)
    .pipe(takeUntil(this.destroy$))
    .subscribe(citizen => this.router.navigate([citizen.id]));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
