import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SearchService } from '../controller/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  closeResult: string;
  isValid = false;
  result: any;
  query:string;

  constructor(
    private modalService: NgbModal,
    private searchService: SearchService,

    ) { }

  ngOnInit() {

  }

  
  search2() {
    console.log("click");
    this.searchService.searchGoop().subscribe((data)=>{
      console.log(data);
      this.result = data;
    });
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
