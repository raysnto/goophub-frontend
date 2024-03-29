import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { SearchComponent } from './view/search.component';
import { SearchService } from './controller/search.service';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    SearchComponent,
  ],
  providers: [
    SearchService,
  ]
})
export class SearchModule { }
