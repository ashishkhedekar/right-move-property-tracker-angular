import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const service = 'http://localhost:8080/market-summary';

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
    return this.http.get<Array<LocationInterface>>(service);
  }

  loadLocationMarketDetails(locationIdentifier) {
    return this.http.get<Array<LocationDetailsInterface>>('http://localhost:8080/market-details?locationIdentifier='+locationIdentifier);
  }

}


