import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { opacityAnimation } from './app-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    opacityAnimation
  ]
})
export class AppComponent  {
  constructor(private contexts: ChildrenOutletContexts) {}

getRouteAnimationData() {
  return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
}
}
