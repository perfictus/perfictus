import { Component, Renderer2 } from '@angular/core';
import { Index7NavbarComponent } from "./components/index7-navbar/index7-navbar.component";
import { Index7HeroComponent } from "./components/index7-hero/index7-hero.component";
import { Index7AboutComponent } from "./components/index7-about/index7-about.component";
import { Index7ServiceComponent } from "./components/index7-service/index7-service.component";
import { Index7ChooseComponent } from "./components/index7-choose/index7-choose.component";
import { Index7TeamAreaComponent } from "./components/index7-team-area/index7-team-area.component";
import { Index7TestiComponent } from "./components/index7-testi/index7-testi.component";
import { Index7BlogComponent } from "./components/index7-blog/index7-blog.component";
import { Index7ContactComponent } from "./components/index7-contact/index7-contact.component";
import { FooterComponent } from "../../../layout/components/footer/footer.component";

@Component({
  selector: 'app-index7',
  imports: [Index7NavbarComponent, Index7HeroComponent, Index7AboutComponent, Index7ServiceComponent, Index7ChooseComponent, Index7TeamAreaComponent, Index7TestiComponent, Index7BlogComponent, Index7ContactComponent, FooterComponent],
  templateUrl: './index7.component.html',
  styles: ``
})
export class Index7Component {
  constructor(public rendered: Renderer2) { }

  ngOnInit() {
    this.rendered.addClass(document.body, 'body1')
  }

  ngOnDestroy() {
    this.rendered.removeClass(document.body, 'body1')
  }
}
