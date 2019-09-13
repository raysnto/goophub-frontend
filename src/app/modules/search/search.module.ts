import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './view/search.component';
import { SearchService } from './controller/search.service';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchComponent,
  ],
  providers: [
    SearchService,
  ]
})
export class SearchModule { }
