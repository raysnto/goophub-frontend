import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { DetailsService } from '../controller/details.service';
import { ActivatedRoute, Router } from '@angular/router';

import { faBook, faCodeBranch, faBan, faArchway, faGlobeAmericas, faCrosshairs, faCheckDouble, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private goop: any;
  private result: any;

  faBook = faBook;
  faCodeBranch = faCodeBranch;
  faBan = faBan;
  faArchway = faArchway;
  faGlobe = faGlobeAmericas;
  faCrosshairs = faCrosshairs;
  faCheckDouble = faCheckDouble;
  faCheck = faCheck;
  
  constructor(
    private detailsService:DetailsService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private ref: ChangeDetectorRef) {
      this.goop = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    if(this.goop) {
      this.detailsService.searchEntities(this.goop.uri).subscribe(result => {
        console.log(result);
        this.result = result;
        this.goop.classes = this.result.classes;
        this.goop.properties = this.result.properties;
        this.goop.url = this.result.url.split('\^')[0];
      })
      /*
      this.result = this.detailsService.searchEntitiesMock(this.goop.iri);
      this.goop.characteristics = this.result.characteristics;
      this.goop.classes = this.result.classes;
      this.goop.properties = this.result.properties;
      this.goop.url = this.result.url;  
      */
      console.log(this.goop);
    }
    else {
      this.navigate2search();
    }
    this.ref.detectChanges();
  }

  navigate2search() {
    this.router.navigateByUrl('/search');
  }

  getGoopName() {
    if(this.goop) {
      return this.goop.name;
    }
    else {
      return null;
    }
    
  }

  getGoopType() {
    if(this.goop) {
      return this.goop.type;
    }
    else {
      return null;
    }
  }

  getGoopURI() {
    if(this.goop) {
      return this.goop.uri;
    }
    else {
      return null;
    }
  }

  getGoopClasses() {
    if (this.goop) {
      return this.goop.classes;
    }
    else {
      return null;
    }
  }
  
  getGoopProperties() {
    if (this.goop) { 
      return this.goop.properties;
    }
    else {
      return null;
    }
  }

  getGoopURL() {
    return this.goop.url;
  }

  checkGoopURL() {
    if(this.goop.url) {
      if(this.goop.url  == "\"\"") {
        return false;
      }
      else {
        return true;
      }
    }
    else {
      return false;
    }
  }
}
