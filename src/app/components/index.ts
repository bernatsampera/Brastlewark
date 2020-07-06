import { DashboardComponent } from './dashboard/dashboard.component';
import { CitizenListComponent } from './dashboard/citizen-list/citizen-list.component';
import { CitizenDetailComponent } from './dashboard/citizen-detail/citizen-detail.component';
import { FilterCitizenComponent } from './dashboard/filter-citizen/filter-citizen.component';
import { PaginatorComponent } from './dashboard/paginator/paginator.component';
import { SortCitizenComponent } from './dashboard/sort-citizen/sort-citizen.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';


export const COMPONENTS_DECLARATIONS = [
  DashboardComponent,
  CitizenListComponent,
  CitizenDetailComponent,
  FilterCitizenComponent,
  PaginatorComponent,
  SortCitizenComponent
];

export const UI_MODULES = [
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatSortModule,
  MatSnackBarModule
];
