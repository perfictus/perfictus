import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { ServiceAreaComponent } from "./components/service-area/service-area.component";
import { CounterAreaComponent } from "./components/counter-area/counter-area.component";
import { TeamAreaComponent } from "./components/team-area/team-area.component";
import { ContactAreaComponent } from "./components/contact-area/contact-area.component";

@Component({
  selector: 'app-service1',
  imports: [BreadcrumbComponent, ServiceAreaComponent, CounterAreaComponent, TeamAreaComponent, ContactAreaComponent],
  templateUrl: './service1.component.html',
  styles: ``
})
export class Service1Component {

}
