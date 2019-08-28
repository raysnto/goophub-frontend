import { Component, OnInit } from '@angular/core';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/sparql/sparql'

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndpointComponent implements OnInit {

  constructor() { }

  result: any;
  result2: any = {
    s: ["time", "date", "hour", "day", "month"],
    p: ["class", "class", "class", "class", "class"]
  };
  queryKeys = Object.keys;
  isValid: boolean;

  ngOnInit() {
  }

  search() {
    this.isValid = true;
    this.result = [
      {
        name: "Describe Date",
        type: "Complex Goal",
        classes: [ 'time', 'date', 'hour', 'day', 'month' ],
        properties: [ 'has', 'hasDate', 'hasDay' ]
      },
      {
        name: "Describe Location",
        type: "Atomic Goal",
        classes: [ 'time', 'date', 'hour', 'day', 'month' ],
        properties: [ 'has', 'hasDate', 'hasDay' ]
      },
      {
        name: "Describe Date",
        type: "Complex Goal",
        classes: [ 'time', 'date', 'hour', 'day', 'month' ],
        properties: [ 'has', 'hasDate', 'hasDay' ]
      },
      {
        name: "Describe Location",
        type: "Atomic Goal",
        classes: [ 'time', 'date', 'hour', 'day', 'month' ],
        properties: [ 'has', 'hasDate', 'hasDay' ]
      },
      {
        name: "Describe Date",
        type: "Complex Goal",
        classes: [ 'time', 'date', 'hour', 'day', 'month' ],
        properties: [ 'has', 'hasDate', 'hasDay' ]
      },
      {
        name: "Describe Location",
        type: "Atomic Goal",
        classes: [ 'time', 'date', 'hour', 'day', 'month' ],
        properties: [ 'has', 'hasDate', 'hasDay' ]
      },
      {
        name: "Describe Date",
        type: "Complex Goal",
        classes: [ 'time', 'date', 'hour', 'day', 'month' ],
        properties: [ 'has', 'hasDate', 'hasDay' ]
      },
      {
        name: "Describe Location",
        type: "Atomic Goal",
        classes: [ 'time', 'date', 'hour', 'day', 'month' ],
        properties: [ 'has', 'hasDate', 'hasDay' ]
      },
    ]
    this.isValid = true;
    console.log(this.result);
  }

  clear() {
    this.result = {};
    this.isValid = false;
  }

}
