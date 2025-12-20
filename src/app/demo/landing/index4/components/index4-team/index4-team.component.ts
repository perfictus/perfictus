import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index4-team',
  imports: [SlickCarouselModule],
  templateUrl: './index4-team.component.html',
  styles: ``
})
export class Index4TeamComponent {
  team = [
    {
      "name": "Kireon Pollardy",
      "position": "Founder And CEO",
      "image": "assets/img/team/team8-image1.png",
      "shape": "assets/img/shapes/team8-image-shape.png"
    },
    {
      "name": "Jaclin Farnandez",
      "position": "Digital Marketing Manager",
      "image": "assets/img/team/team8-image2.png",
      "shape": "assets/img/shapes/team8-image-shape.png"
    },
    {
      "name": "Julian Blackwell",
      "position": "PPC Campaign Manager",
      "image": "assets/img/team/team8-image3.png",
      "shape": "assets/img/shapes/team8-image-shape.png"
    },
    {
      "name": "Maya Fitzgerald",
      "position": "Content Strategist",
      "image": "assets/img/team/team8-image4.png",
      "shape": "assets/img/shapes/team8-image-shape.png"
    }
  ]

  slickConfig = {
    margin: "30",
    slidesToShow: 4,
    arrows: true,
    prevArrow: '.team8-prev-arrow',
    nextArrow: '.team8-next-arrow',
    centerMode: true,
    dots: false,
    loop: true,
    // centerMode: false,
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
