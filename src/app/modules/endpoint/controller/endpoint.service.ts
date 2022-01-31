import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(
    private http: HttpClient,
  ) { }

  search(query: string) {
    let params = new HttpParams().set('query', encodeURIComponent(query));
    return this.http.get(`${environment.baseUrl}/search/advanced`, { params: params });
  }
}