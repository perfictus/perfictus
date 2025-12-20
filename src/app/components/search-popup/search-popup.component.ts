import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-popup',
  imports: [RouterLink],
  templateUrl: './search-popup.component.html',
  styles: ``
})
export class SearchPopupComponent {
  @Input() isVisible: boolean = false;
  @Output() closePopup = new EventEmitter<void>(); 

  close() {
    this.closePopup.emit(); 
  }

}
