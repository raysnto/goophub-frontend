import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

// CodeMirror editor
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
 
// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

/* Import dos componentes */
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';

/* Import dos modulos */
import { SearchComponent } from './modules/search/view/search.component';
import { EndpointComponent} from './modules/endpoint/view/endpoint.component';
import { UploadComponent } from './modules/upload/view/upload.component';

import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './modules/search/controller/search.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Error404Component,
    UploadComponent,
    EndpointComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    CodemirrorModule,
    HttpClientModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
