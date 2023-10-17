import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, data: { animation: 'aboutPage' }},
  { path: 'home', component: HomeComponent, data: { animation: 'homePage' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'photos', component: PhotosComponent, data: { animation: 'photosPage' } },
  { path: 'photos/:photoId', component: PhotoDetailComponent, data: { animation: 'photoPage' } },
  { path: 'videos', component: VideosComponent, data: { animation: 'videoPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'contactPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules  
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
