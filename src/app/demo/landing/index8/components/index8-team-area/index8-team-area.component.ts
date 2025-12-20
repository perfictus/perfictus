import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index8-team-area',
  imports: [SlickCarouselModule],
  templateUrl: './index8-team-area.component.html',
  styles: ``
})
export class Index8TeamAreaComponent {
  teamConfig = {
    margin: "30",
    slidesToShow: 3,
    arrows: true,
    prevArrow: '.team10-prev-arrow',
    nextArrow: '.team10-next-arrow',
    // centerMode: true,
    dots: false,
    loop: true,
    centerMode: false,
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
