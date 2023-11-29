import { Component, HostListener } from '@angular/core';
import { videos, Video } from 'src/assets/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  shouldDisplayVideos: boolean = false;
  videos: Video[] = videos

  ngOnInit() {
    this.displayMoreVideos()
  }
  
  @HostListener('window:resize', ['$event'])
  displayMoreVideos(): void {
    this.shouldDisplayVideos = window.innerWidth <= 600; 
  }
}
