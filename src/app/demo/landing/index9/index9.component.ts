import { Component, Renderer2 } from '@angular/core';
import { Index9NavbarComponent } from "./components/index9-navbar/index9-navbar.component";
import { Index9HeroComponent } from "./components/index9-hero/index9-hero.component";
import { Index9AboutComponent } from "./components/index9-about/index9-about.component";
import { Index9ChooseComponent } from "./components/index9-choose/index9-choose.component";
import { Index9WorkComponent } from "./components/index9-work/index9-work.component";
import { Index9ShopComponent } from "./components/index9-shop/index9-shop.component";
import { Index9TestiComponent } from "./components/index9-testi/index9-testi.component";
import { Index9InstaComponent } from "./components/index9-insta/index9-insta.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index9',
  imports: [Index9NavbarComponent, RouterLink,Index9HeroComponent, Index9AboutComponent, Index9ChooseComponent, Index9WorkComponent, Index9ShopComponent, Index9TestiComponent, Index9InstaComponent,RouterLink],
  templateUrl: './index9.component.html',
  styles: ``
})
export class Index9Component {
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
}
