import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { videosResolver } from './resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'homePage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'aboutPage' }},
  { path: 'photos', component: PhotosComponent, data: { animation: 'photosPage' } },
  { path: 'videos', component: VideosComponent, resolve: { videos: videosResolver }, data: { animation: 'videoPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'contactPage' } },
  { path: 'photos/:photoId', component: PhotoDetailComponent, data: { animation: 'photoPage' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { animation: 'notFoundPage' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
