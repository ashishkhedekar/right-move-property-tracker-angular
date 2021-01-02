import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface LocationInterface {
  locationIdentifier: string;
  locationName: string;
  numberOfLetProperties: number;
  numberOfSoldProperties: number;
}

export interface LocationDetailsInterface {
  displayAddress: string;
  displayPrice: number;
  firstVisibleDate: string;
  channel: string;
  mainMapImageSrc: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<Array<LocationInterface>>(`${environment.backendEndpoint}/market-summary`);
  }

  loadLocationMarketDetails(locationIdentifier) {
    console.log(`Calling endpoing at ${environment.backendEndpoint}/market-details?locationIdentifier=${locationIdentifier}`);
    return this.http.get<Array<LocationDetailsInterface>>(`${environment.backendEndpoint}/market-details?locationIdentifier=${locationIdentifier}`);
  }

}


