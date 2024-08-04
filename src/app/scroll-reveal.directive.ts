import {
  Directive,
  ElementRef,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollReveal();
    }
  }

  private async initScrollReveal() {
    const ScrollReveal = (await import('scrollreveal')).default;
    ScrollReveal().reveal(this.el.nativeElement, {
      duration: 1000,
      origin: 'left',
      distance: '100px',
      easing: 'ease-in-out',
    });
  }
}
