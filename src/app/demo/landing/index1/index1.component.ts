import { Component, Renderer2 } from '@angular/core';
import { IndexNavbarComponent } from "./components/index-navbar/index-navbar.component";
import { IndexHEroComponent } from "./components/index-hero/index-hero.component";
import { IndexAboutComponent } from "./components/index-about/index-about.component";
import { IndexServiceComponent } from "./components/index-service/index-service.component";
import { IndexWorkAreaComponent } from "./components/index-work-area/index-work-area.component";
import { IndexTestimonialComponent } from "./components/index-testimonial/index-testimonial.component";
import { IndexBlogComponent } from "./components/index-blog/index-blog.component";
import { Footer1Component } from "./components/footer1/footer1.component";

@Component({
  selector: 'app-index1',
  imports: [IndexNavbarComponent, IndexHEroComponent, IndexAboutComponent, IndexServiceComponent, IndexWorkAreaComponent, IndexTestimonialComponent, IndexBlogComponent, Footer1Component],
  templateUrl: './index1.component.html',
  styles: ``
})
export class Index1Component {

  constructor(public rendered: Renderer2) { }

  ngOnInit() {
    this.rendered.addClass(document.body, 'body1')
  }

  ngOnDestroy() {
    this.rendered.removeClass(document.body, 'body1')
  }
}
