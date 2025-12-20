import { Component, Renderer2 } from '@angular/core';
import { Index2navbarComponent } from "./components/index2navbar/index2navbar.component";
import { Index2heroComponent } from "./components/index2hero/index2hero.component";
import { Index2aboutComponent } from "./components/index2about/index2about.component";
import { Index2chooseComponent } from "./components/index2choose/index2choose.component";
import { Index2testimonialComponent } from "./components/index2testimonial/index2testimonial.component";
import { Index2footer2Component } from "./components/index2footer2/index2footer2.component";

@Component({
  selector: 'app-index2',
  imports: [Index2navbarComponent, Index2heroComponent, Index2aboutComponent, Index2chooseComponent, Index2testimonialComponent, Index2footer2Component],
  templateUrl: './index2.component.html',
  styles: ``
})
export class Index2Component {
  constructor(public rendered: Renderer2) { }

  ngOnInit() {
    this.rendered.addClass(document.body, 'body7')
  }

  ngOnDestroy() {
    this.rendered.removeClass(document.body, 'body7')
  }
}
