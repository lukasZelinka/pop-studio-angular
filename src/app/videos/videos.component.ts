import { Component } from '@angular/core';
import { thumbnails, Thumbnail } from 'src/assets/data/data';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  thumbnails: Thumbnail[] = thumbnails
}
