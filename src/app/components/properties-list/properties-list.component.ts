import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {LocationDetailsInterface, LocationsService} from '../../services/locations.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent implements OnInit, AfterViewInit {

  @Input() locationId: string;
  @Input() channel: string;
  displayedColumns: string[] = ['mainMapImageSrc', 'displayAddress', 'bedrooms', 'displayPrice', 'firstVisibleDate', 'offMarketDate', 'daysOnMarket'];
  properties: LocationDetailsInterface[] = [];
  propertiesDataSource: MatTableDataSource<LocationDetailsInterface> = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  constructor(private locationsService: LocationsService) { }

  ngAfterViewInit() {
    this.propertiesDataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.locationsService.loadLocationMarketDetails(this.locationId).subscribe(locationDetails => {
      console.log(`Found ${locationDetails.length} properties`);
      locationDetails.forEach(locationDetail => {
        if (locationDetail.channel === this.channel)
        {
          this.properties.push(locationDetail);
        }
      });
      this.propertiesDataSource.data = this.properties;

    });
  }
}
