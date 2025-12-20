import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index9-testi',
  imports: [SlickCarouselModule],
  templateUrl: './index9-testi.component.html',
  styles: ``
})
export class Index9TestiComponent {
  testiConfig9 = {
    margin: "30",
    slidesToShow: 1,
    arrows: false,
    // centerMode: true,
    // dots: false,
    loop: true,
    centerMode: false,
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
