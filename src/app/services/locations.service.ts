import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface LocationInterface {
  locationId: string;
  locationName: string;
  description: string;
  numberOfLetProperties: number;
  numberOfSoldProperties: number;
}

export interface LocationDetailsInterface {
  displayAddress: string;
  displayPrice: number;
  firstVisibleDate: string;
  channel: string;
  mainMapImageSrc: string;
  bedrooms: number;
}

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<Array<LocationInterface>>(`${environment.backendEndpoint}/market-summary`);
  }

  loadLocationMarketDetails(locationId) {
    return this.http.get<Array<LocationDetailsInterface>>(`${environment.backendEndpoint}/market-details?locationId=${locationId}&numberOfDays=200`);
  }

}


