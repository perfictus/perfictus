import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ChooseComponent } from "./components/choose/choose.component";

@Component({
  selector: 'app-contact-us',
  imports: [BreadcrumbComponent, ContactComponent, ChooseComponent],
  templateUrl: './contact-us.component.html',
  styles: ``
})
export class ContactUsComponent {

}
