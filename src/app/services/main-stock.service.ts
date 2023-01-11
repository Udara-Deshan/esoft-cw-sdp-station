import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {FuelTokenDTO} from "../dtos/FuelTokenDTO";

@Injectable({
  providedIn: 'root'
})
export class MainStockService {
  baseUrl = environment.baseUrl + 'mainstock/'

  constructor(private httpClient: HttpClient) {
  }

  requestToken(fuelTokenDTO: FuelTokenDTO) {
    return this.httpClient.post(this.baseUrl + 'addStock', fuelTokenDTO)
  }
}
