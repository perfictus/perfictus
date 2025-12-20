import { Component } from '@angular/core';
import { HoverActiveDirective } from '../../../../../directives/hover-active.directive';
import { CommonModule } from '@angular/common';
import { GsapRevealDirective } from '../../../../../directives/gsap-reveal.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index2about',
  imports: [HoverActiveDirective,CommonModule,GsapRevealDirective,RouterLink],
  templateUrl: './index2about.component.html',
  styleUrl: './index2about.component.scss'
})
export class Index2aboutComponent {
  services = [
    {
      "title": "Partner Recruitment",
      "image": "assets/img/all-images/case-img1.png",
      "link": "/case-single",
      "description": "Build and optimize high-performing affiliate networks that drive results.",
      "aos": {
        "effect": "fade-up",
        "duration": 900
      }
    },
    {
      "title": "Performance Analysis",
      "image": "assets/img/all-images/case-img2.png",
      "link": "/case-single",
      "description": "Build and optimize high-performing affiliate networks that drive results.",
      "aos": {
        "effect": "fade-up",
        "duration": 900
      }
    },
    {
      "title": "Campaign Optimization",
      "image": "assets/img/all-images/case-img3.png",
      "link": "/case-single",
      "description": "Build and optimize high-performing affiliate networks that drive results.",
      "aos": {
        "effect": "fade-up",
        "duration": 1000
      }
    },
    {
      "title": "Affiliate Program Management",
      "image": "assets/img/all-images/case-img4.png",
      "link": "/case-single",
      "description": "Build and optimize high-performing affiliate networks that drive results.",
      "aos": {
        "effect": "fade-up",
        "duration": 1100
      }
    }
  ]

}
