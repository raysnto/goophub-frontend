import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(
    private http: HttpClient,
  ) { }

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
        'url': 'https://nemo.inf.ufes.br/goops/describe_place#',
        'characteristics': {
          'hasVersion': true,
          'validIris': 75.0,
          'owlProfile': {
            'DL': false,
            'EL': true,
            'QL': true,
            'RL': true,
            'Full': false
          },
          'documentation': 100.0,
          'foundationOntologies': {
            'hasImport': false,
            'percentage': 0.0
          },
          'language': {
            'oneOrMore': true,
            'list': [
              {
                'name': 'en',
                'value': 75.0
              },
              {
                'name': 'it',
                'value': 75.0
              }
            ]
          },
          'clarity': 7.12,
          'consistent': true
        }
      }
    }
    if (query == 'https://nemo.inf.ufes.br/goops/describe_location#') {
      return {
        'classes': [

        ],
        'properties': [

        ],
        'url': 'https://nemo.inf.ufes.br/goops/describe_location#',
        'characteristics': {
          'hasVersion': true,
          'validIris': 11.36,
          'owlProfile': {
            'DL': false,
            'EL': true,
            'QL': true,
            'RL': true,
            'Full': false
          },
          'documentation': 80.0,
          'foundationOntologies': {
            'hasImport': false,
            'percentage': 0.0
          },
          'language': {
            'oneOrMore': true,
            'list': [
              {
                'name': 'en',
                'value': 100.0
              },
              {
                'name': 'it',
                'value': 100.0
              }
            ]
          },
          'clarity': 99,
          'consistent': true
        }
      }
    }
    if (query == 'https://nemo.inf.ufes.br/goops/describe_geographic_place#') {
      return {
        'classes': [

        ],
        'properties': [

        ],
        'url': 'https://nemo.inf.ufes.br/goops/describe_geographic_place#',
        'characteristics': {
          'hasVersion': true,
          'validIris': 71.43,
          'owlProfile': {
            'DL': true,
            'EL': true,
            'QL': true,
            'RL': true,
            'Full': false
          },
          'documentation': 100.0,
          'foundationOntologies': {
            'hasImport': false,
            'percentage': 0.0
          },
          'language': {
            'oneOrMore': false,
            'list': [
              {
                'name': 'en',
                'value': 100.0
              }
            ]
          },
          'clarity': 2.8,
          'consistent': true
        }
      }
    }
  }
}