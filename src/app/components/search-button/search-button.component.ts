import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-button',
  imports: [],
  templateUrl: './search-button.component.html',
  styles: ``
})
export class SearchButtonComponent {
  @Output() searchOpened = new EventEmitter<void>();
  openSearch() {
    this.searchOpened.emit();
  }
}
