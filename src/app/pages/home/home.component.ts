import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  closeResult: string;
  isValid = false;
  result: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }

  search() {
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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
