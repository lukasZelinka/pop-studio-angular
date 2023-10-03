import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  shouldDisplayVideos = false;

  @HostListener('window:resize', ['$event'])

  ngOnInit() {
    this.displayMoreVideos()
  }

  displayMoreVideos(): void {
    this.shouldDisplayVideos = window.innerWidth <= 600; 
  }
}
