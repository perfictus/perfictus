import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MagnificPopupDirective } from '../../../../../directives/popup.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index2hero',
  imports: [CarouselModule,MagnificPopupDirective,RouterLink],
  templateUrl: './index2hero.component.html',
  styleUrl: './index2hero.component.scss'
})
export class Index2heroComponent {
  videoUrl= "https://www.youtube.com/watch?v=Y8XpQpW5OVY"
  partners = [
    "assets/img/logo/hero7-slider1.svg",
    "assets/img/logo/hero7-slider2.svg",
    "assets/img/logo/hero7-slider3.svg",
    "assets/img/logo/hero7-slider4.svg",
    "assets/img/logo/hero7-slider5.svg",
    "assets/img/logo/hero7-slider1.svg",
    "assets/img/logo/hero7-slider2.svg",
    "assets/img/logo/hero7-slider3.svg",
    "assets/img/logo/hero7-slider4.svg",
    "assets/img/logo/hero7-slider5.svg"
  ];

  owlCarouselConfig:OwlOptions = {
    loop: true,
    margin: 10,
    dots:false,
    // responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: false,
        loop: false
      }
    }
  }


  playVideo() {
    if (this.videoUrl) {
      window.open(this.videoUrl, '_blank');
    } else {
      console.warn('No video URL provided.');
    }
  }
}
