import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { CitizenListComponent } from './dashboard/citizen-list/citizen-list.component';
import {MatGridListModule} from '@angular/material/grid-list';

export const COMPONENTS_DECLARATIONS = [
  DashboardComponent,
  CitizenListComponent
];

export const UI_MODULES = [
  MatCardModule,
  MatInputModule,
  MatGridListModule,
];
