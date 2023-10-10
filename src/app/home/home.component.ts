import { Component, HostListener } from '@angular/core';
import { videos, Video } from 'src/assets/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  shouldDisplayVideos = false;
  videos: Video[] = videos

  @HostListener('window:resize', ['$event'])

  ngOnInit() {
    this.displayMoreVideos()
  }

  displayMoreVideos(): void {
    this.shouldDisplayVideos = window.innerWidth <= 600; 
  }
}
