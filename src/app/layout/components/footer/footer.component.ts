import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CONTACT, NAV_LINKS } from '../../../data/site-content';
import { FOOTER_LEGAL_LINKS } from '../../../data/legal';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  private router = inject(Router);

  links = NAV_LINKS;
  legal = FOOTER_LEGAL_LINKS;
  contact = CONTACT;
  year = new Date().getFullYear();

  // The Shopify call-to-action heading is shown on the home page only.
  isHome = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.checkHome()),
    ),
    { initialValue: this.checkHome() },
  );

  private checkHome(): boolean {
    const path = this.router.url.split(/[?#]/)[0];
    return path === '/' || path === '/home';
  }
}
