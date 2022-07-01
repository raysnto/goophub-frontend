import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NovoUploadComponent } from './view/novo-upload.component';
import { NovoUploadService } from './controller/novo-upload.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    NovoUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    NovoUploadService
  ]
})
export class NovoUploadModule { }