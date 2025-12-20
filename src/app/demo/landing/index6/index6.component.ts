import { Component, Renderer2 } from '@angular/core';
import { Index6NavbarComponent } from "./components/index6-navbar/index6-navbar.component";
import { Index6HeroComponent } from "./components/index6-hero/index6-hero.component";
import { Index6BrandComponent } from "./components/index6-brand/index6-brand.component";
import { Index6AboutComponent } from "./components/index6-about/index6-about.component";
import { Index6ServiceComponent } from "./components/index6-service/index6-service.component";
import { Index6ProgressComponent } from "./components/index6-progress/index6-progress.component";
import { Index6TeamComponent } from "./components/index6-team/index6-team.component";
import { Index6TestiComponent } from "./components/index6-testi/index6-testi.component";
import { Index6CtaComponent } from "./components/index6-cta/index6-cta.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index6',
  imports: [Index6NavbarComponent, Index6HeroComponent, Index6BrandComponent, Index6AboutComponent, Index6ServiceComponent, Index6ProgressComponent, Index6TeamComponent, Index6TestiComponent, Index6CtaComponent,RouterLink],
  templateUrl: './index6.component.html',
  styles: ``
})
export class Index6Component {
  currentYear: number = new Date().getFullYear();

  constructor(public rendered: Renderer2) { }

  ngOnInit() {
    this.rendered.addClass(document.body, 'body')
  }

  ngOnDestroy() {
    this.rendered.removeClass(document.body, 'body')
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
