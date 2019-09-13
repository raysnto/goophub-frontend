import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { UploadComponent } from './pages/upload/upload.component';
import { EndpointComponent } from './pages/endpoint/endpoint.component';

/* Import dos modulos */
import { SearchComponent } from './modules/search/view/search.component';

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
