import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {FuelTokenDTO} from "../dtos/FuelTokenDTO";

@Injectable({
  providedIn: 'root'
})
export class FuelTokenService {
  baseUrl = environment.baseUrl + 'fueltoken/'

  constructor(private httpClient: HttpClient) {
  }


  requestToken(fuelTokenDTO: FuelTokenDTO) {
    return this.httpClient.post(this.baseUrl + 'generate', fuelTokenDTO)
  }

  getAllTokenByUsername() {
    return this.httpClient.get(this.baseUrl + 'getAllTokenByUsername')

  }

  getAllQRandDetails() {
    return this.httpClient.get(this.baseUrl + 'getAllQRandDetails')

  }

  getAllTokenByFuelStationId() {
    return this.httpClient.get(this.baseUrl + 'getAllTokenByFuelStationId')

  }

  getAllTokens() {
    return this.httpClient.get(this.baseUrl + 'getAllTokens')

  }

  changeTokenStatus(tid: number, status: string) {
    return this.httpClient.put(this.baseUrl + 'changeTokenStatus', {}, {
      params: {
        tid,
        status
      }
    })

  }

}
