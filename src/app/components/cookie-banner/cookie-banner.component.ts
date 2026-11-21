import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsentService } from '../../service/consent.service';

@Component({
  selector: 'app-cookie-banner',
  imports: [RouterLink],
  template: `
    @if (consent.open()) {
    <div class="pf-cookie" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p>
        <i class="fa-solid fa-cookie-bite"></i>
        We use Google Analytics cookies to see how visitors use our site, so we can improve it. No advertising cookies.
        <a routerLink="/cookie-policy">Cookie Policy</a>
      </p>
      <div class="pf-cookie-actions">
        <button type="button" class="pf-btn pf-btn--ghost pf-btn--sm" (click)="consent.decline()">Decline</button>
        <button type="button" class="pf-btn pf-btn--sm" (click)="consent.accept()">Accept</button>
      </div>
    </div>
    }
  `,
})
export class CookieBannerComponent {
  consent = inject(ConsentService);
}
