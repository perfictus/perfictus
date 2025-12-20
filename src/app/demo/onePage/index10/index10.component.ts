import { Component, Renderer2 } from '@angular/core';
import { Index10NavbarComponent } from "./components/index10-navbar/index10-navbar.component";
import { Index10HeroComponent } from "./components/index10-hero/index10-hero.component";
import { Index10AboutComponent } from "./components/index10-about/index10-about.component";
import { Index10ServiceComponent } from "./components/index10-service/index10-service.component";
import { Index10WorkComponent } from "./components/index10-work/index10-work.component";
import { Index10ProjectComponent } from "./components/index10-project/index10-project.component";
import { Index10TestiComponent } from "./components/index10-testi/index10-testi.component";
import { Index10FaqComponent } from "./components/index10-faq/index10-faq.component";
import { Index10BlogComponent } from "./components/index10-blog/index10-blog.component";
import { Index10CtaComponent } from "./components/index10-cta/index10-cta.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index10',
  imports: [Index10NavbarComponent, Index10HeroComponent, RouterLink, Index10AboutComponent, Index10ServiceComponent, Index10WorkComponent, Index10ProjectComponent, Index10TestiComponent, Index10FaqComponent, Index10BlogComponent, Index10CtaComponent, CommonModule,RouterLink],
  templateUrl: './index10.component.html',
  styles: ``
})
export class Index10Component {
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
