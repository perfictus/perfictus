import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index8-testimonial',
  imports: [SlickCarouselModule],
  templateUrl: './index8-testimonial.component.html',
  styles: ``
})
export class Index8TestimonialComponent {
  testiConfig = {
    slidesToShow: 3,
    arrows: true,
    prevArrow: '.tes10-prev-arrow',
    nextArrow: '.tes10-next-arrow',
    centerMode: true,
    dots: false,
    loop: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: false,
    fadeSpeed: 1000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  }
}
