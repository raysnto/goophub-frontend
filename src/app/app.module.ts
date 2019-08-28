import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// CodeMirror editor
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
 
// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { UploadComponent } from './pages/upload/upload.component';
import { EndpointComponent } from './pages/endpoint/endpoint.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Error404Component,
    UploadComponent,
    EndpointComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule,
    CodemirrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
