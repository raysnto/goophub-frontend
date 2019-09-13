import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(
    private http: HttpClient,

  ) { }

  searchGoop() {
    return this.http.get('http://localhost:8080/tool/query?query="man"');
  }
}
