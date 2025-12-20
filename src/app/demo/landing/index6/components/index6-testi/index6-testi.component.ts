import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index6-testi',
  imports: [SlickCarouselModule],
  templateUrl: './index6-testi.component.html',
  styles: ``
})
export class Index6TestiComponent {
  testiConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    loop: true,
    focusOnSelect: true,
    infinite: true,
    prevArrow: '.tes9-prev-arrow',
    nextArrow: '.tes9-next-arrow',
    vertical: true,
  }
}
