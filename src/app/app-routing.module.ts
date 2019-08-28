import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { UploadComponent } from './pages/upload/upload.component';
import { EndpointComponent } from './pages/endpoint/endpoint.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'endpoint', component: EndpointComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

