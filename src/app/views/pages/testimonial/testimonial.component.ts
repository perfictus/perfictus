import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-testimonial',
  imports: [BreadcrumbComponent, SlickCarouselModule],
  templateUrl: './testimonial.component.html',
  styles: ``
})
export class TestimonialComponent {
  slickConfig = {
    margin: "30",
    slidesToShow: 1,
    arrows: false,
    // centerMode: true,
    dots: false,
    loop: true,
    centerMode: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: false,
    fadeSpeed: 1000,
    // dots: true,
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
