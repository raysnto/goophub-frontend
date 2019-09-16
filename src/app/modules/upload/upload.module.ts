import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './view/upload.component';
import { UploadService } from './controller/upload.service';



@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    UploadService
  ]
})
export class UploadModule { }
