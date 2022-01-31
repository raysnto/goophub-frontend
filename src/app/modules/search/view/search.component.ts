import {Router} from "@angular/router"
import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchService } from '../controller/search.service';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  closeResult: string;
  isValid = false;
  emptyQuery = false;
  filters = false;
  result: any;
  goopDetails: any;
  query:string;
  faArrowLeft = faArrowLeft;

  constructor(
    private modalService: NgbModal,
    private searchService: SearchService,
    private router: Router

    ) { }

  ngOnInit() {

  }

  advancedSearch() {
    console.log("redirecionando");
    this.router.navigate(['/endpoint'])
  }

  closeAlert() {
    this.emptyQuery = false;
  }
  
  search() {
    console.log("request -> function 'search':" + this.query);
    this.searchService.searchGoop(this.query).subscribe((data)=>{
      if(!data) {
        this.emptyQuery = true
        return;
      }
      this.result = data;
      console.log("response -> function 'search':");
      console.log(this.result);
      this.result.goops.length > 0 ? this.isValid = true : this.emptyQuery = true;
    });
    //this.result = this.searchService.searchGoopMock(this.query);
    this.filters = false
  }

  navigate2details(goop:any) {
    this.router.navigateByUrl('/details', { state:  goop });
  }

  closeFilter() {
    if (this.filters) {
      this.filters = false
    }
    else {
      this.filters = true
    }
  }

  applyFilter() {

  }

  download(goop:any) {
    this.searchService.downloadGoop(goop.uri).subscribe(data => {
      const blob = new Blob([data as BlobPart], { type: 'html/xml' });
      const url= window.URL.createObjectURL(blob);
      var anchor = document.createElement("a");
      anchor.download = goop.name + ".owl";
      anchor.href = url;
      anchor.click();
    });
  }

}
