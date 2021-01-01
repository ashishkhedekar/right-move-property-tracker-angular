import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocationComponent} from './components/location/location.component';
import {LocationDetailsComponent} from './components/location-details/location-details.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path : '',
    component: DashboardComponent
  },
  {
    path : 'location-details/:location-details',
    component : LocationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
