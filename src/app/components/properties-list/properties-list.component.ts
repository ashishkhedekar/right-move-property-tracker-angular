import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {LocationDetailsInterface, LocationsService} from '../../services/locations.service';
import {MatSort} from '@angular/material/sort';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent implements OnInit, AfterViewInit {

  @Input() locationId: string;
  @Input() channel: string;
  public expand = false;
  properties: LocationDetailsInterface[] = [];
  @ViewChild(MatSort) sort: MatSort;
  offMarketInDays = [];
  constructor(private locationsService: LocationsService) { }

  toggle()
  {
    console.log('Menu to be showed before' + this.expand);
    this.expand = !this.expand;
    console.log('Menu to be showed after' + this.expand);
  }

  ngAfterViewInit() {
    this.offMarketInDays = ['1', '2'];
  }

  ngOnInit(): void {
    this.locationsService.loadLocationMarketDetails(this.locationId).subscribe(locationDetails => {
      locationDetails.forEach(locationDetail => {
        if (locationDetail.channel === this.channel)
        {
          this.properties.push(locationDetail);
          if (locationDetail.mainMapImageSrc === null || locationDetail.mainMapImageSrc === '')
          {
            locationDetail.mainMapImageSrc = 'https://specialistbuildingsupplies.co.uk/wp-content/uploads/2021/02/image-coming-soon-placeholder.png';
          }
        }
      });
    });
  }

  handleChange(typeOfProperties){
    this.properties = [];
    this.locationsService.loadLocationMarketDetails(this.locationId).subscribe(locationDetails => {
      locationDetails.forEach(locationDetail => {
        if (locationDetail.channel === typeOfProperties)
        {
          this.properties.push(locationDetail);
          if (locationDetail.mainMapImageSrc === null || locationDetail.mainMapImageSrc === '')
          {
            locationDetail.mainMapImageSrc = 'https://specialistbuildingsupplies.co.uk/wp-content/uploads/2021/02/image-coming-soon-placeholder.png';
          }
        }
      });
    });
  }

}
