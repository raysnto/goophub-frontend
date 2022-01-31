import { Component, OnInit } from '@angular/core';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/sparql/sparql'

import { EndpointService } from '../controller/endpoint.service';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndpointComponent implements OnInit {

  constructor(
    private endpointService : EndpointService
  ) { }

  result: any;
  _object = Object;
  queryKeys: Array<string>;
  isValid: boolean;
  query: string;

  ngOnInit() {
  }

  search() {
    console.log(this.query);
    this.endpointService.search(this.query).subscribe( data => {
      this.result = data;
      this.result = this.result.results;
      console.log(this.result);
      this.queryKeys = Object.keys(this.result[0]);
      console.log(this.queryKeys)
      this.isValid = true;
    });
  }

  clear() {
    this.query = "";
    this.result = {};
    this.isValid = false;
  }

}
