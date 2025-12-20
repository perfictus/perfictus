import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index4-testimonial',
  imports: [SlickCarouselModule],
  templateUrl: './index4-testimonial.component.html',
  styles: ``
})
export class Index4TestimonialComponent {
  slickConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    loop: true,
    focusOnSelect: true,
    infinite: true,
    prevArrow: '.tes8-prev-arrow',
    nextArrow: '.tes8-next-arrow',
    vertical: true,
  }
}
