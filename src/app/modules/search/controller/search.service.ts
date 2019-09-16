import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(
    private http: HttpClient,

  ) { }

  baseURL = "http://localhost:8080/search"

  searchGoop(query: string) {
    return this.http.get(`${this.baseURL}/query?query=${query}`);
  }

  searchEntities(query: string) {
    return this.http.get(`${this.baseURL}/querygoal?query=${query}`);
  }
}
