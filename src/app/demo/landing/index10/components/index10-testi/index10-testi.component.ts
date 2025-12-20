import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GsapRevealDirective } from '../../../../../directives/gsap-reveal.directive';

@Component({
  selector: 'app-index10-testi',
  imports: [SlickCarouselModule,GsapRevealDirective],
  templateUrl: './index10-testi.component.html',
  styles: ``
})
export class Index10TestiComponent {
  slickTesti = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    loop: true,
    focusOnSelect: true,
    infinite: true,
    prevArrow: '.tes6-prev-arrow',
    nextArrow: '.tes6-next-arrow',
  }
}
