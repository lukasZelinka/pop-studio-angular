import {inject} from '@angular/core';
import { ResolveFn, Router} from '@angular/router';
import {EMPTY, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

import { Video } from '../assets/data/data';
import { DataService } from './services/data-service';

export const videosResolver: ResolveFn<Video[]> = () => {
  const router = inject(Router);
  const ds = inject(DataService);
  

  return ds.getVideos().pipe(mergeMap(videos => {
    if (videos) {
      return of(videos);
    } else {  
      router.navigate(['/home']);
      return EMPTY;
    }
  }));
};
