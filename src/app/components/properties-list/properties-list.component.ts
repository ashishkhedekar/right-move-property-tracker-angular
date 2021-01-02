import {Component, Input, OnInit} from '@angular/core';
import {LocationDetailsInterface, LocationsService} from '../../services/locations.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent implements OnInit {

  @Input() locationId: string;
  @Input() channel: string;
  displayedColumns: string[] = ['mainMapImageSrc', 'displayAddress', 'displayPrice', 'firstVisibleDate', 'offMarketDate', 'daysOnMarket'];
  properties: LocationDetailsInterface[] = [];
  propertiesDataSource: MatTableDataSource<LocationDetailsInterface>;
  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.locationsService.loadLocationMarketDetails(this.locationId).subscribe(locationDetails => {
      console.log(`Found ${locationDetails.length} properties`);
      locationDetails.forEach(locationDetail => {
        if (locationDetail.channel === this.channel)
        {
          this.properties.push(locationDetail);
        }
      });
      this.propertiesDataSource = new MatTableDataSource(this.properties);
    });
  }
}
