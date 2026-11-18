import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styles: ``
})
export class BreadcrumbComponent {
  @Input() title = '';
  @Input() highlight = '';
  @Input() eyebrow = 'Perfection Starts With Us';
  @Input() lead = '';
}
