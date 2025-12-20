import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index5testi',
  imports: [SlickCarouselModule,RouterLink],
  templateUrl: './index5testi.component.html',
  styles: ``
})
export class Index5testiComponent {
  configs = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    loop: true,
    focusOnSelect: true,
    infinite: true,
    prevArrow: '.tes5-prev-arrow',
    nextArrow: '.tes5-next-arrow',
  }
}
