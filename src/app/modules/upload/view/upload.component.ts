import { Component, OnInit } from '@angular/core';
import { UploadService } from '../controller/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public isComplexCollapsed = false;
  public isAtomicCollapsed = true;

  // Atomic Fields
  atomicFileUpload: any[];
  atomicName: string;
  atomicEmail: string;
  atomicOrganization: string;
  atomicRole: string;
  atomicGoal: string;

  // Complex Fields
  complexFileUpload: any[];
  complexName: string;
  complexEmail: string;
  complexOrganization: string;
  complexRole: string;
  complexGoal: string;
  complexDecomposition: any;
  complexGoalList: [];

  constructor(
    private uploadService: UploadService
  ) { }

  ngOnInit() {
  }

  onAtomicFileChange(event){
    this.atomicFileUpload = event.target.files;
    console.log(event);
    console.log(this.atomicFileUpload);
  }

  onComplexFileChange(event){
    this.complexFileUpload = event.target.files;
    console.log(event);
    console.log(this.complexFileUpload);
  }

  atomicUpload() {
    let form = new FormData();
    form.append('name', this.atomicName);
    form.append('email', this.atomicEmail);
    form.append('organization', this.atomicOrganization);
    form.append('role', this.atomicRole);
    form.append('goal', this.atomicGoal);
    if (this.atomicFileUpload !== undefined) {
      form.append('file', this.atomicFileUpload[0], this.atomicFileUpload[0].name);
    }
    else {
      alert("Missing Atomic Goop Fragment");
      return;
    }    
    this.uploadService.atomicUpload(form).subscribe(result => {
      console.log(result);
    })

  }

  complexUpload() {
    let form = new FormData();
    form.append('name', this.complexName);
    form.append('email', this.complexEmail);
    form.append('organization', this.complexOrganization);
    form.append('role', this.complexRole);
    form.append('decomposition', this.complexDecomposition);
    form.append('goal', this.complexGoal);
    form.append('atomic[]', JSON.stringify(this.complexGoalList));
    console.log(this.complexFileUpload.length);
    if (this.complexFileUpload !== undefined) {
      form.append('file', this.complexFileUpload[0], this.complexFileUpload[0].name);
    }
    else {
      alert("Missing Complex Goop Fragment");
      return;
    }
    this.uploadService.complexUpload(form).subscribe(result => {
      console.log(result);
    })

  }

}

