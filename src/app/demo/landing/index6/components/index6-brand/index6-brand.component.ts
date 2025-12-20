import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index6-brand',
  imports: [SlickCarouselModule],
  templateUrl: './index6-brand.component.html',
  styles: ``
})
export class Index6BrandComponent {
  brandConfig = {
    margin: "30",
    slidesToShow: 5,
    arrows: false,
    centerMode: true,
    dots: false,
    loop: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: false,
    fadeSpeed: 1000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 3,
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
