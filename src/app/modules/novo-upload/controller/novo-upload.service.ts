import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NovoUploadService {

  constructor(
    private http: HttpClient,
  ) { }

  atomicUpload(formData: FormData) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(`${environment.baseUrl}/novo-upload/atomic`, formData, { headers });
  }

  complexUpload(formData: FormData) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    console.log(formData);
    return this.http.post(`${environment.baseUrl}/novo-upload/complex`, formData, { headers });
  }


  complexSearch(goal: string) {
    let params = new HttpParams().set('query', encodeURIComponent(goal));
    return this.http.get(`${environment.baseUrl}/search/goop`, { params: params });
  }
}
