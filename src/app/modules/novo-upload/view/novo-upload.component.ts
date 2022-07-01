import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NovoUploadService } from '../controller/novo-upload.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-novo-upload',
  templateUrl: './novo-upload.component.html',
  styleUrls: ['./novo-upload.component.scss']
})
export class NovoUploadComponent implements OnInit {
  public isComplexCollapsed = false;
  public isAtomicCollapsed = true;

  // Atomic Fields
  atomicFileUpload: any[];
  atomicImageUpload: any[];
  atomicName: string;
  atomicEmail: string;
  atomicOrganization: string;
  atomicRole: string;
  atomicGoal: string;

  // Complex Fields
  complexFileUpload: any[];
  complexImageUpload: any[];
  complexName: string;
  complexEmail: string;
  complexOrganization: string;
  complexRole: string;
  complexGoal: string;
  complexDecomposition: any;
  complexGoalList: any[];
  queryGoal: string;

  // Aux variable
  loading: boolean = false;
  success: boolean = false;
  result: any;
  goopList: any;

  constructor(
    private novoUploadService: NovoUploadService,
    private ref: ChangeDetectorRef
  ) { }

  private _success = new Subject<string>();
  private _warning = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';
  warningMessage = '';

  ngOnInit(): void {

     // Atomic Fields
    this.atomicFileUpload = undefined;
    this.atomicImageUpload = undefined;
    this.atomicName = "";
    this.atomicEmail = "";
    this.atomicOrganization = "";
    this.atomicRole = "";
    this.atomicGoal = "";

    // Complex Fields
    this.complexFileUpload = undefined;
    this.complexImageUpload = undefined;
    this.complexName = "";
    this.complexEmail = "";
    this.complexOrganization = "";
    this.complexRole = "";
    this.complexGoal = "";
    this.complexDecomposition = "";
    this.complexGoalList = [];
    this.queryGoal = "";

    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');
    this._warning.subscribe(message => this.warningMessage = message);
    this._warning.pipe(
      debounceTime(5000)
    ).subscribe(() => this.warningMessage = '');
  }

  public changeSuccessMessage(type: string) {
    if(type == "warning"){
      this._warning.next(`Missing fragment file.`);
    }
    if(type == "success"){
      this._success.next(`Fragment upload finished withou error.`);
    }
  }

  search() {
    console.log(this.queryGoal);
    this.novoUploadService.complexSearch(this.queryGoal).subscribe(result => {
      console.log(result);
      this.goopList = result;
    });
  }

  addGoal(goal) {
    goal.name = goal.name.trim().replaceAll("\"", "");
    this.complexGoalList.push(goal);
    this.queryGoal = "";
    console.log(this.complexGoalList);
  }

  removeGoal(goal) {
    this.complexGoalList.splice(this.complexGoalList.indexOf(goal), 1);
    console.log(this.complexGoalList);
  }

  onAtomicImageChange(event){
    this.atomicImageUpload = event.target.files;
    console.log(event);
    console.log(this.atomicImageUpload);
  }

  onAtomicFileChange(event){
    this.atomicFileUpload = event.target.files;
    console.log(event);
    console.log(this.atomicFileUpload);
  }

  onComplexImageChange(event){
    this.complexImageUpload = event.target.files;
    console.log(event);
    console.log(this.complexImageUpload);
  }

  onComplexFileChange(event){
    this.complexFileUpload = event.target.files;
    console.log(event);
    console.log(this.complexFileUpload);
  }

  atomicUpload() {
    this.loading = true;
    this.ref.markForCheck();
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
      this.changeSuccessMessage("warning");
      this.loading = false;
      this.ref.markForCheck();      
      return;
    }    

    if (this.atomicImageUpload !== undefined) {
      form.append('image', this.atomicImageUpload[0], this.atomicImageUpload[0].name);
    }
    
    this.novoUploadService.atomicUpload(form).subscribe(result => {
      this.result = result;
      console.log(this.result);
      if('info' in this.result) {
        this.changeSuccessMessage("success");
      }
      if('error' in this.result) {
        this.changeSuccessMessage("warning");
      }
      this.ngOnInit();
    })
    
  }

  complexUpload() {
    this.loading = true
    this.ref.markForCheck();
    let form = new FormData();
    form.append('name', this.complexName);
    form.append('email', this.complexEmail);
    form.append('organization', this.complexOrganization);
    form.append('role', this.complexRole);
    form.append('decomposition', this.complexDecomposition);
    form.append('goal', this.complexGoal);
    form.append('atomics', JSON.stringify(this.complexGoalList));
    if (this.complexFileUpload !== undefined) {
      form.append('file', this.complexFileUpload[0], this.complexFileUpload[0].name);
    }
    else {
      this.changeSuccessMessage("warning");
      this.loading = false;
      this.ref.markForCheck();
      return;
    }

    if (this.complexImageUpload !== undefined) {
      form.append('image', this.complexImageUpload[0], this.complexImageUpload[0].name);
    }
    this.novoUploadService.complexUpload(form).subscribe(result => {
      this.result = result;
      console.log(this.result);
      if('info' in this.result) {
        this.changeSuccessMessage("success");
      }
      if('error' in this.result) {
        this.changeSuccessMessage("warning");
      }
      this.ngOnInit();
    })
    this.loading = false;
    this.success = false;
    this.ref.markForCheck();
    
  }

}

