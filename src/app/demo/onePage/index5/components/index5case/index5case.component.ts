import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index5case',
  imports: [SlickCarouselModule,RouterLink],
  templateUrl: './index5case.component.html',
  styles: ``
})
export class Index5caseComponent {
  slideConfig = {
    speed: 1000,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    prevArrow: '<button class="prev-next"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="next-prev"><i class="fa-solid fa-angle-right"></i></button>',
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: '0',
    swipe: true,
    autoplaySpeed: 2500,
    autoplay: false
  };

  slides = [
    { id: 1, image: 'assets/img1.jpg' },
    { id: 2, image: 'assets/img2.jpg' },
    { id: 3, image: 'assets/img3.jpg' },
    { id: 4, image: 'assets/img4.jpg' },
    { id: 5, image: 'assets/img5.jpg' },
  ];

  slickInit(event: any) {
    let slick = event.slick;
    let cur = slick.$slides[slick.currentSlide],
      next = cur.nextElementSibling,
      prev = cur.previousElementSibling;

    if (prev) prev.classList.add('slick-sprev');
    if (next) next.classList.add('slick-snext');
    cur.classList.remove('slick-snext', 'slick-sprev');

    slick.$prev = prev;
    slick.$next = next;
  }


  beforeChange(event: any, currentSlide: number, nextSlide: number) {
    let slick = event.slick;
    let cur = slick.$slides[nextSlide],
      next = cur.nextElementSibling,
      prev = cur.previousElementSibling;

    if (slick.$prev) slick.$prev.classList.remove('slick-sprev');
    if (slick.$next) slick.$next.classList.remove('slick-snext');

    if (prev) prev.classList.add('slick-sprev');
    if (next) next.classList.add('slick-snext');

    slick.$prev = prev;
    slick.$next = next;
    cur.classList.remove('slick-snext', 'slick-sprev');
  }
}