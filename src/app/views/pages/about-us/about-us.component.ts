import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { AboutAreaComponent } from "./components/about-area/about-area.component";
import { AbloutChooseComponent } from "./components/ablout-choose/ablout-choose.component";
import { StatsComponent } from "../../../components/stats/stats.component";

@Component({
  selector: 'app-about-us',
  imports: [BreadcrumbComponent, AboutAreaComponent, StatsComponent, AbloutChooseComponent],
  templateUrl: './about-us.component.html',
  styles: ``
})
export class AboutUSComponent {

}
