import { Component } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-blog-content',
  imports: [NgSelectComponent, FormsModule],
  templateUrl: './blog-content.component.html',
  styles: ``,
})
export class BlogContentComponent {
  selectedOption = 'Select Option'

  options = [
    { id: 0, name: 'Select Option' },
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
  ]
}
