import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CitizenDetailComponent } from './components/dashboard/citizen-detail/citizen-detail.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: ':id', component: CitizenDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
