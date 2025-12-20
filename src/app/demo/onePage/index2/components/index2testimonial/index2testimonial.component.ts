import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index2testimonial',
  imports: [SlickCarouselModule,RouterLink],
  templateUrl: './index2testimonial.component.html',
  styleUrl: './index2testimonial.component.scss'
})
export class Index2testimonialComponent {
  testimonial = [
    {
      "name": "Shakib Al Hasan",
      "designation": "Marketing Manager",
      "image": "assets/img/testimonial/team2-image1.png",
      "quote": "Their expertise in social media advertising is unmatched. Thanks to their targeted campaigns, our website traffic grew by 75%, and we achieved a 30% conversion rate!",
      "rating": 5
    },
    {
      "name": "Tanzid Tamim",
      "designation": "Marketing Manager",
      "image": "assets/img/testimonial/team2-image2.png",
      "quote": "The team at Perfictus truly understands the affiliate marketing landscape. Their data-driven approach and proactive communication made it easy for us to scale our network and boost our ROI.",
      "rating": 5
    },
    {
      "name": "Taskin Ahmed",
      "designation": "Founder, Luxe Interiors",
      "image": "assets/img/testimonial/team2-image3.png",
      "quote": "We partnered with Perfictus to optimize our affiliate campaigns, and the results were incredible. Their strategies are innovative, and the results speak for themselves. Highly recommended!",
      "rating": 5
    },
    {
      "name": "Shakib Al Hasan",
      "designation": "Marketing Manager",
      "image": "assets/img/testimonial/team2-image1.png",
      "quote": "Their expertise in social media advertising is unmatched. Thanks to their targeted campaigns, our website traffic grew by 75%, and we achieved a 30% conversion rate!",
      "rating": 5
    },
    {
      "name": "Tanzid Tamim",
      "designation": "Marketing Manager",
      "image": "assets/img/testimonial/team2-image2.png",
      "quote": "The team at Perfictus truly understands the affiliate marketing landscape. Their data-driven approach and proactive communication made it easy for us to scale our network and boost our ROI.",
      "rating": 5
    },
    {
      "name": "Taskin Ahmed",
      "designation": "Founder, Luxe Interiors",
      "image": "assets/img/testimonial/team2-image3.png",
      "quote": "We partnered with Perfictus to optimize our affiliate campaigns, and the results were incredible. Their strategies are innovative, and the results speak for themselves. Highly recommended!",
      "rating": 5
    }
  ]


  blog = [
    {
      "title": "Top 5 Affiliate Marketing Trends to Watch in 2025",
      "date": "12/12/2024",
      "author": "John Doe",
      "image": "assets/img/icons/date1.svg",
      "authorImage": "assets/img/icons/author1.svg",
      "link": "/blog-details"
    },
    {
      "title": "Top 5 Affiliate Marketing Trends to Watch in 2025",
      "date": "12/12/2024",
      "author": "John Doe",
      "image": "assets/img/icons/date1.svg",
      "authorImage": "assets/img/icons/author1.svg",
      "link": "/blog-details"
    },
    {
      "title": "Top 5 Affiliate Marketing Trends to Watch in 2025",
      "date": "12/12/2024",
      "author": "John Doe",
      "image": "assets/img/icons/date1.svg",
      "authorImage": "assets/img/icons/author1.svg",
      "link": "/blog-details"
    }
  ]


  testimonialConfig = {
    margin: "30",
    slidesToShow: 3,
    arrows: false,
    centerMode: true,
    dots: true,
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
