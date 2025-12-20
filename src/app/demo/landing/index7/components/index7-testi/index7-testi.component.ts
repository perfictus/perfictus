import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index7-testi',
  imports: [SlickCarouselModule,RouterLink],
  templateUrl: './index7-testi.component.html',
  styles: ``
})
export class Index7TestiComponent {
  testiConfig = {
    margin: "30",
    slidesToShow: 3,
    arrows: false,
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
