// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { videos, Video } from 'src/assets/data/data';


// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private videos$: BehaviorSubject<Video[]> = new BehaviorSubject<Video[]>(videos);
  
//   getVideos() { return this.videos$; }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { videos, Video } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private videos$: BehaviorSubject<Video[]> = new BehaviorSubject<Video[]>(videos);
  
  getVideos(): Observable<Video[]> {
    return this.videos$.asObservable();
  }
}
