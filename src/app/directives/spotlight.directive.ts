import { Directive, ElementRef, HostListener } from '@angular/core';

// Exposes the pointer position as --mx / --my so CSS can draw a glow that follows the cursor.
@Directive({
  selector: '[pfSpotlight]',
})
export class SpotlightDirective {
  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('pointermove', ['$event'])
  onMove(event: PointerEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.el.nativeElement.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    this.el.nativeElement.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }
}
