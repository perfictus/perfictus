import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index-work-area',
  imports: [SlickCarouselModule,RouterLink],
  templateUrl: './index-work-area.component.html',
  styles: ``
})
export class IndexWorkAreaComponent {

  slides= [
    {
      "id": 1,
      "image": "assets/img/others/work1-image1.png",
      "shape": "assets/img/shapes/work1-shape.png",
      "title": "Monitoring & Optimization",
      "description": "Continuous monitoring and regular optimizations to keep your campaigns effective and aligned with your goals.",
      "features": [
        "In-Depth Research",
        "Implementation with Precision",
        "Transparent Reporting"
      ]
    },
    {
      "id": 2,
      "image": "assets/img/others/work1-image2.png",
      "shape": "assets/img/shapes/work1-shape.png",
      "title": "Monitoring & Optimization",
      "description": "Continuous monitoring and regular optimizations to keep your campaigns effective and aligned with your goals.",
      "features": [
        "In-Depth Research",
        "Implementation with Precision",
        "Transparent Reporting"
      ]
    }
  ]

  slickConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    loop: true,
    focusOnSelect: true,
    infinite: true,
    prevArrow: '.work1-prev-arrow',
    nextArrow: '.work1-next-arrow',
  }
}
