import { Component, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
interface MenuItem {
  title: string;
  link: string;
  subMenu?: MenuItem[]; // Optional submenu
  nestedMenu?: MenuItem[]; // Optional nested menu
}
@Component({
  selector: 'app-navbars',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarsComponent {
  @Input() btnColor: string = ''
  @Input() Arrow: boolean = true
  isSearchOpened = false;
  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 100;
  }
  handleSearchOpened() {
    this.isSearchOpened = true;
  }

  handleClosePopup() {
    this.isSearchOpened = false;
  }
  menuItems = [
    {
      label: 'Home',
      icon: 'fa-regular fa-angle-down',
      children: [
        {
          title: '01. SEO Marketing',
          image: 'assets/img/demo/demo1.jpg',
          multiPage: '/index',
          onePage: '/single-index1'
        },
        {
          title: '02. Affiliate Marketing',
          image: 'assets/img/demo/demo2.jpg',
          multiPage: '/index2',
          onePage: '/single-index2'
        },
        {
          title: '03. Startup Agency',
          image: 'assets/img/demo/demo3.jpg',
          multiPage: '/index3',
          onePage: '/single-index3'
        },
        {
          title: '04. SEO Marketing',
          image: 'assets/img/demo/demo4.jpg',
          multiPage: '/index4',
          onePage: '/single-index4'
        },
        {
          title: '05. Digital  Marketing',
          image: 'assets/img/demo/demo5.jpg',
          multiPage: '/index5',
          onePage: '/single-index5'
        },
        {
          title: '06. Social Marketing',
          image: 'assets/img/demo/demo6.jpg',
          multiPage: '/index6',
          onePage: '/single-index6'
        },
        {
          title: '07. Social Marketing',
          image: 'assets/img/demo/demo7.jpg',
          multiPage: '/index7',
          onePage: '/single-index7'
        },
        {
          title: '08 .Startup Agency',
          image: 'assets/img/demo/demo8.jpg',
          multiPage: '/index8',
          onePage: '/single-index8'
        },
        {
          title: '09. Advertising Agency',
          image: 'assets/img/demo/demo9.jpg',
          multiPage: '/index9',
          onePage: '/single-index9'
        },
        {
          title: '10. Human Resources',
          image: 'assets/img/demo/demo10.jpg',
          multiPage: '/index10',
          onePage: '/single-index10'
        }
      ]
    }
  ];

  menu: MenuItem[] = [
    {
      "title": "Portfolio",
      "link": "portfolio",
      // "subMenu": [
      //   { "title": "Portfolio", "link": "portfolio" },
      //   { "title": "Portfolio Details", "link": "portfolio-details" }
      // ]
    },
    {
      "title": "Service",
      "link": "service",
      // "subMenu": [
      //   {
      //     "title": "Service",
      //     "link": "#",
      //     "nestedMenu": [
      //       { "title": "Service 01", "link": "service" },
      //       { "title": "Service 02", "link": "service2" }
      //     ]
      //   },
      //   {
      //     "title": "Single Service",
      //     "link": "#",
      //     "nestedMenu": [
      //       { "title": "SEO Marketing", "link": "service-details1" },
      //       { "title": "Social Marketing", "link": "service-details2" },
      //       { "title": "Content Marketing", "link": "service-details3" },
      //       { "title": "Pay Per Click", "link": "service-details4" },
      //       { "title": "Travel Guide", "link": "service-details5" },
      //       { "title": "HR Staffing Agency", "link": "service-details6" },
      //       { "title": "Insurance Policy", "link": "service-details7" },
      //       { "title": "Real Estate", "link": "service-details8" },
      //       { "title": "Startup Agency", "link": "service-details9" }
      //     ]
      //   }
      // ]
    },
    {
      "title": "About us ",
      "link": "about",
      // "subMenu": [
      //   { "title": "About Us", "link": "about" },
      //   { "title": "Our Team", "link": "team" },
      //   { "title": "Testimonial", "link": "testimonial" },
      //   { "title": "FAQ's", "link": "faq" },
      //   { "title": "Pricing", "link": "pricing" },
      //   { "title": "Contact Us", "link": "contact" },
      //   { "title": "404", "link": "error" }
      // ]
    },
    {
      "title": "Shopify Apps ",
      "link": "pricing",
      // "subMenu": [
      //   { "title": "About Us", "link": "about" },
      //   { "title": "Our Team", "link": "team" },
      //   { "title": "Testimonial", "link": "testimonial" },
      //   { "title": "FAQ's", "link": "faq" },
      //   { "title": "Pricing", "link": "pricing" },
      //   { "title": "Contact Us", "link": "contact" },
      //   { "title": "404", "link": "error" }
      // ]
    },
    // {
    //   "title": "Page's ",
    //   "link": "#",
    //   "subMenu": [
    //     { "title": "About Us", "link": "about" },
    //     { "title": "Our Team", "link": "team" },
    //     { "title": "Testimonial", "link": "testimonial" },
    //     { "title": "FAQ's", "link": "faq" },
    //     { "title": "Pricing", "link": "pricing" },
    //     { "title": "Contact Us", "link": "contact" },
    //     { "title": "404", "link": "error" }
    //   ]
    // },
    // {
    //   "title": "Blogs",
    //   "link": "blog2",
    //   "subMenu": [
    //     {
    //       "title": "Our Blogs",
    //       "link": "#",
    //       "nestedMenu": [
    //         { "title": "Blog 01", "link": "blog" },
    //         { "title": "Blog 02", "link": "blog2" }
    //       ]
    //     },
    //     {
    //       "title": "Blog Details",
    //       "link": "#",
    //       "nestedMenu": [
    //         { "title": "Blog Details Left", "link": "blog-details-left" },
    //         { "title": "Blog Details Right", "link": "blog-details-right" },
    //         { "title": "Blog Details", "link": "blog-details" }
    //       ]
    //     }
    //   ]
    // }
  ]
}
