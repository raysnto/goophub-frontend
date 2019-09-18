import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(
    private http: HttpClient,

  ) { }

  baseURL = "http://localhost:8080/search"

  searchGoop(query: string) {
    let params = new HttpParams().set('query', encodeURIComponent(query));
    return this.http.get(`${this.baseURL}/query`, { params: params });
  }

  searchEntities(query: string) {
    let params = new HttpParams().set('query', encodeURIComponent(query));
    return this.http.get(`${this.baseURL}/querygoal`, { params: params });
  }
}
