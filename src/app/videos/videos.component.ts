import { Component, ViewChildren, ElementRef, QueryList   } from '@angular/core';
import { thumbnails, Thumbnail } from 'src/assets/data/data';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  thumbnails: Thumbnail[] = thumbnails
  @ViewChildren('myVideo') videoPlayers!: QueryList<ElementRef>;


   constructor() {
    document.addEventListener('fullscreenchange', this.closeFullscreen.bind(this));
  }

   openFullscreen(index: number) {
    const video = this.videoPlayers.toArray()[index].nativeElement;

    if (video.requestFullscreen) {
      video.requestFullscreen().then(() => {
        this.fullScreenSettings(video);
      });
    } else if (video.mozRequestFullScreen) { // Firefox
      video.mozRequestFullScreen().then(() => {
        this.fullScreenSettings(video);
      });
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      video.webkitRequestFullscreen().then(() => {
        this.fullScreenSettings(video);
      });
    } else if (video.msRequestFullscreen) { // IE/Edge
      video.msRequestFullscreen().then(() => {
        this.fullScreenSettings(video);
      });
    }
  }

  fullScreenSettings(video: HTMLVideoElement) {
    video.currentTime = 0;
    video.play();
    video.muted = false;
    video.volume = 1.0; 
    video.loop = false
  }
  
  closeFullscreen() {
   this.videoPlayers.forEach(videoPlayer => {
    const video = videoPlayer.nativeElement;
    if (!document.fullscreenElement) {
      video.muted = true;
      video.controls = false;
    }
  });
  }
}











