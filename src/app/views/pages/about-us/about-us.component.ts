import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { AboutAreaComponent } from "./components/about-area/about-area.component";
import { AbloutCounterComponent } from "./components/ablout-counter/ablout-counter.component";
import { AbloutChooseComponent } from "./components/ablout-choose/ablout-choose.component";
import { AbloutServiceComponent } from "./components/ablout-service/ablout-service.component";
import { AboutTestimonialComponent } from "./components/about-testimonial/about-testimonial.component";
import { AboutTeamComponent } from "./components/about-team/about-team.component";
import { AboutContactComponent } from "./components/about-contact/about-contact.component";

@Component({
  selector: 'app-about-us',
  imports: [BreadcrumbComponent, AboutAreaComponent, AbloutCounterComponent, AbloutChooseComponent, AbloutServiceComponent, AboutTestimonialComponent, AboutTeamComponent, AboutContactComponent],
  templateUrl: './about-us.component.html',
  styles: ``
})
export class AboutUSComponent {

}
