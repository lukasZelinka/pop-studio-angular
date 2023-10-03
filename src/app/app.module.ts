import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { PrimengModule } from 'primeng'; // all prime NG components
import { ToolbarModule } from 'primeng/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuModule } from 'primeng/menu';
import { AboutComponent } from './about/about.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component'; 
import { DividerModule } from 'primeng/divider';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AboutComponent,
    PhotosComponent,
    VideosComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToolbarModule,
    SidebarModule,
    MenuModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
