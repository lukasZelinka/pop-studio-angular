import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  shouldDisplayVideos = false;

  @HostListener('window:resize', ['$event'])

  ngOnInit() {
    this.displayMoreVideos()
  }

  displayMoreVideos(): void {
    this.shouldDisplayVideos = window.innerWidth <= 600; 
  }
}
