import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
baseUrl=environment.baseUrl+'auth'
  constructor(private httpClient:HttpClient) { }

  getCredentials(username:string, password:string){
  return this.httpClient.post(this.baseUrl+'/authenticate',{
    username:username,
    password:password
  },{})
  }
}
