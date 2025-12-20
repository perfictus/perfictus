import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-about-testimonial',
  imports: [SlickCarouselModule],
  templateUrl: './about-testimonial.component.html',
  styles: ``
})
export class AboutTestimonialComponent {
slickConfig={
  margin: "30",
    slidesToShow: 1,
    arrows: false,
    centerMode: true,
    loop: true,
    // centerMode: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: false,
    fadeSpeed: 1000,
    dots: true,
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
