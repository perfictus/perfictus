import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { ServiceArea2Component } from "./components/service-area2/service-area2.component";
import { ServiceCounter2Component } from "./components/service-counter2/service-counter2.component";
import { ServiceTeam2Component } from "./components/service-team2/service-team2.component";
import { ServiceContact2Component } from "./components/service-contact2/service-contact2.component";

@Component({
  selector: 'app-service2',
  imports: [BreadcrumbComponent, ServiceArea2Component, ServiceCounter2Component, ServiceTeam2Component, ServiceContact2Component],
  templateUrl: './service2.component.html',
  styles: ``
})
export class Service2Component {

}
