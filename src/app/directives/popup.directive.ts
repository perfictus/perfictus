import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
declare var $: any; // Declare jQuery globally

@Directive({
    selector: '[appMagnificPopup]'
})
export class MagnificPopupDirective implements AfterViewInit {
    @Input() popupType: string = 'iframe'; // Default to 'iframe' for video links

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        $(this.el.nativeElement).magnificPopup({
            type: this.popupType,
            disableOn: 700,
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
}
