import { Component } from '@angular/core';
import { CountUpDirective } from '../../directives/count-up.directive';
import { STATS } from '../../data/site-content';

@Component({
  selector: 'app-stats',
  imports: [CountUpDirective],
  templateUrl: './stats.component.html',
  styles: ``
})
export class StatsComponent {
  stats = STATS;
}
