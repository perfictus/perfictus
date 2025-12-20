import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgSelectComponent } from '@ng-select/ng-select'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-blogdetail-left',
  imports: [RouterLink, NgSelectComponent, FormsModule],
  templateUrl: './blogdetail-left.component.html',
  styles: ``,
})
export class BlogdetailLeftComponent {
  selectedOption = 'Select Option'

  options = [
    { id: 0, name: 'Select Option' },
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
  ]
}
