import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// Gently tilts the element towards the pointer for a 3D hover effect.
@Directive({
  selector: '[pfTilt]',
})
export class TiltDirective {
  @Input() tiltMax = 8;

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('pointermove', ['$event'])
  onMove(event: PointerEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    this.el.nativeElement.style.transform =
      `perspective(900px) rotateX(${-y * this.tiltMax}deg) rotateY(${x * this.tiltMax}deg)`;
  }

  @HostListener('pointerleave')
  onLeave() {
    this.el.nativeElement.style.transform = '';
  }
}
