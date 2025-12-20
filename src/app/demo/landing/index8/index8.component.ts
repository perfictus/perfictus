import { Component, Renderer2 } from '@angular/core';
import { Index8NavbarComponent } from "./components/index8-navbar/index8-navbar.component";
import { Index8HeroComponent } from "./components/index8-hero/index8-hero.component";
import { Index8AboutComponent } from "./components/index8-about/index8-about.component";
import { Index8ServiceComponent } from "./components/index8-service/index8-service.component";
import { Index8FAQComponent } from "./components/index8-faq/index8-faq.component";
import { Index8GrowthAreaComponent } from "./components/index8-growth-area/index8-growth-area.component";
import { Index8TeamAreaComponent } from "./components/index8-team-area/index8-team-area.component";
import { Index8TestimonialComponent } from "./components/index8-testimonial/index8-testimonial.component";
import { Index8BlogComponent } from "./components/index8-blog/index8-blog.component";
import { Index8CtaComponent } from "./components/index8-cta/index8-cta.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index8',
  imports: [Index8NavbarComponent, RouterLink,Index8HeroComponent, Index8AboutComponent, Index8ServiceComponent, Index8FAQComponent, Index8GrowthAreaComponent, Index8TeamAreaComponent, Index8TestimonialComponent, Index8BlogComponent, Index8CtaComponent,RouterLink],
  templateUrl: './index8.component.html',
  styles: ``
})
export class Index8Component {
  currentYear: number = new Date().getFullYear();

  constructor(public rendered: Renderer2) { }

  ngOnInit() {
    this.rendered.addClass(document.body, 'body1')
  }

  ngOnDestroy() {
    this.rendered.removeClass(document.body, 'body1')
  }

  socialLinks = [
    { icon: 'fa-brands fa-facebook-f', url: '#' },
    { icon: 'fa-brands fa-instagram', url: '#' },
    { icon: 'fa-brands fa-linkedin-in', url: '#' },
    { icon: 'fa-brands fa-x-twitter', url: '#' }
  ];

  quickLinks = [
    { name: 'Home', url: '/index' },
    { name: 'About Us', url: '/about' },
    { name: 'Services', url: '/domain' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact Us', url: '/contact' },
    { name: 'Testimonials', url: '/testimonial' }
  ];

  categories = [
    { name: 'Digital Marketing', url: '#' },
    { name: 'SEO Marketing', url: '#' },
    { name: 'Startup Agency', url: '#' },
    { name: 'Advertising Agency', url: '#' },
    { name: 'Social Media Agency', url: '#' },
    { name: 'Web Design Agency', url: '#' }
  ];

  contactInfo = {
    email: 'support@perfictus.com',
    address: '123 Digital Lane, Marketing City, USA',
    phone: '123-456-7890'
  };
}
