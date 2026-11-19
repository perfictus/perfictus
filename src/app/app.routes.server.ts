import { RenderMode, ServerRoute } from '@angular/ssr';

// Every page is pre-rendered to static HTML at build time (no server needed),
// so search engines and link previews get the full content of each page.
export const serverRoutes: ServerRoute[] = [
  { path: '**', renderMode: RenderMode.Prerender },
];
