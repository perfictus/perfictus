import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../components/breadcrumb/breadcrumb.component";
import { CONTACT, POSITIONS } from '../../../data/site-content';

@Component({
  selector: 'app-careers',
  imports: [BreadcrumbComponent],
  templateUrl: './careers.component.html',
  styles: ``
})
export class CareersComponent {
  positions = POSITIONS;
  email = CONTACT.careersEmail;
  openIndex: number | null = 0;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
