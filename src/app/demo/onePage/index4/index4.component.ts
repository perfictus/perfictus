import { Component, Renderer2 } from '@angular/core';
import { Index4HeroComponent } from "./components/index4-hero/index4-hero.component";
import { Index4BrandComponent } from "./components/index4-brand/index4-brand.component";
import { Index4AboutComponent } from "./components/index4-about/index4-about.component";
import { Index4ServiceComponent } from "./components/index4-service/index4-service.component";
import { Index4WorkProcessComponent } from "./components/index4-work-process/index4-work-process.component";
import { Index4TestimonialComponent } from "./components/index4-testimonial/index4-testimonial.component";
import { Index4TeamComponent } from "./components/index4-team/index4-team.component";
import { Index4BlogComponent } from "./components/index4-blog/index4-blog.component";
import { Index4CtaComponent } from "./components/index4-cta/index4-cta.component";
import { Index4NavbarComponent } from "./components/index4-navbar/index4-navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index4',
  imports: [Index4HeroComponent, Index4BrandComponent, Index4AboutComponent,Index4ServiceComponent, Index4WorkProcessComponent, Index4TestimonialComponent, Index4TeamComponent, Index4BlogComponent, Index4CtaComponent, Index4NavbarComponent,RouterLink],
  templateUrl: './index4.component.html',
  styles: ``
})
export class Index4Component {
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
