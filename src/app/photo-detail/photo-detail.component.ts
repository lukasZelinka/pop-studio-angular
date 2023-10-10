import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { photoGalleries, Photogallery } from 'src/assets/data/data';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit{
  photoGallery: Photogallery | undefined; 

  constructor(  private route: ActivatedRoute, private location: Location ) {}

  ngOnInit(): void {
    const photoGalleryId = Number(this.route.snapshot.params['photoId']);
    this.photoGallery = photoGalleries.find(obj => obj.id === photoGalleryId)
  }

  goBack(): void {
  this.location.back();
 }
}
