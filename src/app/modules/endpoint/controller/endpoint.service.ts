import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(
    private http: HttpClient,
  ) { }

  baseURL = "http://localhost:8080/search/sparql"

  search(query: string) {
    return this.http.get(`${this.baseURL}?query=${query}`);
  }
}