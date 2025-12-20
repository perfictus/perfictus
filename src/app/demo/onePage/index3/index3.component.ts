import { Component, Renderer2 } from '@angular/core';
import { Index3navbarComponent } from "./components/index3navbar/index3navbar.component";
import { Index3HeroComponent } from "./components/index3-hero/index3-hero.component";
import { Index3AboutComponent } from "./components/index3-about/index3-about.component";
import { Index3ServiceComponent } from "./components/index3-service/index3-service.component";
import { Index3WorkComponent } from "./components/index3-work/index3-work.component";
import { Index3ChooseComponent } from "./components/index3-choose/index3-choose.component";
import { Index3TeamComponent } from "./components/index3-team/index3-team.component";
import { Index3TestimonialComponent } from "./components/index3-testimonial/index3-testimonial.component";
import { Index3BlogComponent } from "./components/index3-blog/index3-blog.component";
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-index3',
  imports: [Index3navbarComponent, Index3HeroComponent, Index3AboutComponent, Index3ServiceComponent, Index3WorkComponent, Index3ChooseComponent, Index3TeamComponent, Index3TestimonialComponent, Index3BlogComponent,FooterComponent],
  templateUrl: './index3.component.html',
  styles: ``
})
export class Index3Component {
  constructor(public rendered: Renderer2) { }

  ngOnInit() {
    this.rendered.addClass(document.body, 'body1')
  }

  ngOnDestroy() {
    this.rendered.removeClass(document.body, 'body1')
  }
}
