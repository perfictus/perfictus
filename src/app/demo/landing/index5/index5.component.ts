import { Component, Renderer2 } from '@angular/core';
import { Navbar5Component } from "./components/navbar5/navbar5.component";
import { Index5heroComponent } from "./components/index5hero/index5hero.component";
import { Index5aboutComponent } from "./components/index5about/index5about.component";
import { Index5servicesComponent } from "./components/index5services/index5services.component";
import { Index5chooseComponent } from "./components/index5choose/index5choose.component";
import { Index5caseComponent } from "./components/index5case/index5case.component";
import { Index5testiComponent } from "./components/index5testi/index5testi.component";
import { Index5blogComponent } from "./components/index5blog/index5blog.component";
import { Index5contactComponent } from "./components/index5contact/index5contact.component";
import { Index5ctaComponent } from "./components/index5cta/index5cta.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index5',
  imports: [Navbar5Component, Index5heroComponent, Index5aboutComponent, Index5servicesComponent, Index5chooseComponent, Index5caseComponent, Index5testiComponent, Index5blogComponent, Index5contactComponent, Index5ctaComponent,RouterLink],
  templateUrl: './index5.component.html',
  styles: ``
})
export class Index5Component {
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
