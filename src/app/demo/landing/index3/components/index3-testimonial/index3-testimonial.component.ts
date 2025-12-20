import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index3-testimonial',
  imports: [SlickCarouselModule,RouterLink],
  templateUrl: './index3-testimonial.component.html',
  styles: ``
})
export class Index3TestimonialComponent {

  rating = 5.0;
  reviewCount = "50+ Review";
  title = "Success Stories from Visionary Founders";
  testimonials = [
    {
      "brandLogo": "assets/img/others/microsoft.png",
      "testimonial": "As a first-time entrepreneur, I struggled to turn my idea into a tangible business. Perfictus stepped in and provided us with the perfect blend of guidance, strategy, and hands-on support. I highly recommend Perfictus to any startup looking for a reliable partner to navigate the challenging journey of entrepreneurship.",
      "authorImage": "assets/img/testimonial/team2-image2.png",
      "authorName": "Micheal Gough",
      "authorPosition": "CTO at Microsoft"
    },
    {
      "brandLogo": "assets/img/others/microsoft.png",
      "testimonial": "Perfictus has been instrumental in our startup's growth. Their expert team provided invaluable insights, allowing us to scale efficiently. Their guidance helped us achieve milestones faster than we expected.",
      "authorImage": "assets/img/testimonial/team2-image2.png",
      "authorName": "Sarah Johnson",
      "authorPosition": "CEO at StartupX"
    }
  ]
  "circleShape": "assets/img/shapes/tes6-sec-shape.png"



  slickConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    loop: true,
    focusOnSelect: true,
    infinite: true,
    prevArrow: '.tes5-prev-arrow',
    nextArrow: '.tes5-next-arrow',
  }
}
