import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  private base_url = 'https://dummyapi.io/data/v1/'
  private queryString = 'user?limit=10'
  private headers = new HttpHeaders().set('app-id','611f33c594916dee4af13a68')

  constructor(
    private http: HttpClient
  ) { }

  get( query?:any ): Observable<any>{
    query ? this.queryString = query : ''
    return this.http.get(this.base_url + this.queryString, {headers: this.headers })
  }
}

