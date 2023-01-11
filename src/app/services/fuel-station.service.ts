import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FuelStationService {
  baseUrl = environment.baseUrl + 'fuelstation/';

  constructor(private httpClient: HttpClient) {
  }

  requestFuel(quota: number) {
    return this.httpClient.put(this.baseUrl + 'requestFuel', {}, {
      params: {
        quota
      }
    })
  }
  requestFuelStatusChange(status: string) {
    return this.httpClient.put(this.baseUrl + 'requestFuelStatusChange', {}, {
      params: {
        status
      }
    })
  }
  getAllFuelStationDetails(status: string) {
    return this.httpClient.get(this.baseUrl + 'getAllFuelStationDetails')
  }

}
