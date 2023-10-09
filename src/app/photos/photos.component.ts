import { Component } from '@angular/core';
import { photoGalleries, Photogallery } from 'src/assets/data/data';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  photoGalleries:Photogallery[] = photoGalleries
  galleryColumns: Photogallery[][] = [[], [], [], []];

  constructor() {
    for (let i = 0; i < photoGalleries.length; i++) {
      const columnIndex = i % 4;
      this.galleryColumns[columnIndex].push(photoGalleries[i]);
    }
  }
  
}
