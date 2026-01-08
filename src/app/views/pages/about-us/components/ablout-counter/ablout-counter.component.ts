import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ablout-counter',
  imports: [],
  templateUrl: './ablout-counter.component.html',
  styles: ``
})
export class AbloutCounterComponent implements OnInit {

  projectCount = 0;
  revenueCount = 0;
  clientCount = 0;

  ngOnInit(): void {
    this.animateCounter('projectCount', 114, 2000);
    this.animateCounter('revenueCount', 3, 1500);
    this.animateCounter('clientCount', 57, 2000);
  }

  animateCounter(
    property: 'projectCount' | 'revenueCount' | 'clientCount',
    target: number,
    duration: number
  ) {
    const start = 0;
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const increment = target / steps;

    let current = start;

    const timer = setInterval(() => {
      current += increment;
      this[property] = Math.floor(current);

      if (current >= target) {
        this[property] = target;
        clearInterval(timer);
      }
    }, incrementTime);
  }
}
