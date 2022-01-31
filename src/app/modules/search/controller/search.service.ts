import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable()
export class SearchService {

  constructor(
    private http: HttpClient,

  ) { }


  searchGoop(query: string) {
    let params = new HttpParams().set('query', encodeURIComponent(query));
    return this.http.get(`${environment.baseUrl}/search/goop`, { params: params });
  }

  searchGoopMock(query: string) {
    return {
      'goops': [
        {
          'type': 'Atomic',
          'name': 'Describe Place',
          'iri': 'https://nemo.inf.ufes.br/goops/describe_place#'
        },
        {
          'type': 'Atomic',
          'name': 'Describe Location',
          'iri': 'https://nemo.inf.ufes.br/goops/describe_location#'
        },
        {
          'type': 'Atomic',
          'name': 'Describe Geographic Place',
          'iri': 'https://nemo.inf.ufes.br/goops/describe_geographic_place#'
        }
      ]
    }
  }

  searchEntities(query: string) {
    let params = new HttpParams().set('query', encodeURIComponent(query));
    return this.http.get(`${environment.baseUrl}/search/concepts`, { params: params });
  }

  searchEntitiesMock(query: string) {
    if (query == 'https://nemo.inf.ufes.br/goops/describe_place#') {
      return {
        'classes': [

        ],
        'properties': [

        ],
        'uri': 'https://nemo.inf.ufes.br/goops/describe_place#'
      }
    }
    if (query == 'https://nemo.inf.ufes.br/goops/describe_location#') {
      return {
        'classes': [

        ],
        'properties': [

        ],
        'uri': 'https://nemo.inf.ufes.br/goops/describe_location#'
      }
    }
    if (query == 'https://nemo.inf.ufes.br/goops/describe_geographic_place#') {
      return {
        'classes': [

        ],
        'properties': [

        ],
        'uri': 'https://nemo.inf.ufes.br/goops/describe_geographic_place#'
      }
    }
  }

  downloadGoop(query: string) {
    let params = new HttpParams().set('uri', encodeURIComponent(query));
    return this.http.get(`${environment.baseUrl}/download/file`, { params: params, 'responseType': 'text' }, );
  }
}
