import { Component, OnInit } from '@angular/core';
import {LocationInterface, LocationsService} from '../../services/locations.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  locations: Array<LocationInterface>;

  constructor(private service: LocationsService) { }

  ngOnInit(): void {
    this.service.load().subscribe(locations => {
      this.locations = locations;
    });
  }

}
