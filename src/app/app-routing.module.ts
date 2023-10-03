import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { PhotosComponent } from './photos/photos.component'
import { VideosComponent } from './videos/videos.component'
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'photos', component: PhotosComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
