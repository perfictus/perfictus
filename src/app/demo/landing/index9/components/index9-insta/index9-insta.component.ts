import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index9-insta',
  imports: [CarouselModule],
  templateUrl: './index9-insta.component.html',
  styles: ``
})
export class Index9InstaComponent {
  instaCarosel = {
    loop: true,
    margin: 10,
    responsiveClass: true,
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
        items: 5.5,
        nav: false,
        loop: false
      }
    }
  }
}
