import { Component, OnInit } from '@angular/core';
import { photoGalleries, Photogallery } from 'src/assets/data/data';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photoGalleries: Photogallery[] = [];
  galleryColumns: Photogallery[][] = [[], [], [], []];

  ngOnInit(): void {
    this.photoGalleries = photoGalleries;
    this.groupGalleriesIntoColumns();
  }

  private groupGalleriesIntoColumns(): void {
    this.photoGalleries.forEach((gallery, index) => {
      const columnIndex = index % 4;
      this.galleryColumns[columnIndex].push(gallery);
    });
  }
}
