import { trigger, transition, style, animate,query,animateChild,group } from '@angular/animations';

export const opacityAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        opacity: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0 })
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('100ms linear', style({ opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('600ms linear', style({ opacity: 1 }))
      ], { optional: true }),
      query('@*', animateChild(), { optional: true })
    ]),
  ])
]);



  