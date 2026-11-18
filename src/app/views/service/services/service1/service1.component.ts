import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { ServiceAreaComponent } from "./components/service-area/service-area.component";

@Component({
  selector: 'app-service1',
  imports: [BreadcrumbComponent, ServiceAreaComponent],
  templateUrl: './service1.component.html',
  styles: ``
})
export class Service1Component {

}
