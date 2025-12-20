import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GsapRevealDirective } from '../../../../../directives/gsap-reveal.directive';

@Component({
  selector: 'app-index-hero',
  imports: [FormsModule,GsapRevealDirective],
  templateUrl: './index-hero.component.html',
  styles: ``
})
export class IndexHEroComponent {
  auditInput: string = '';
  
  counters = [
    { value: '500+', label: 'Clients Served', gradientId: 'gradient1' },
    { value: '1200+', label: 'Projects Completed', gradientId: 'gradient2' },
    { value: '95%', label: 'Success Rate', gradientId: 'gradient3' }
  ];

  onSubmit() {
    if (this.auditInput.trim()) {
      console.log('Auditing website:', this.auditInput);
      alert(`Auditing: ${this.auditInput}`);
    } else {
      alert('Please enter a website to audit.');
    }
  }
}
