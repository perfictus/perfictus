import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHoverActive]'
})
export class HoverActiveDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.addClass(this.el.nativeElement, 'active');

        // Remove 'active' from siblings
        const parent = this.el.nativeElement.parentNode;
        Array.from(parent.children).forEach((child: any) => {
            if (child !== this.el.nativeElement) {
                this.renderer.removeClass(child, 'active');
            }
        });
    }
}
