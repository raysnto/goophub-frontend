import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndpointComponent } from './view/endpoint.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [EndpointComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EndpointModule { }
