import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrolldirective]',
})
export class ScrolldirectiveDirective implements OnInit {
  ngOnInit() {}
  constructor() {}
  @HostListener('scroll', ['$event']) private onScroll($event: Event): void {
    console.log($event);
  }
}
