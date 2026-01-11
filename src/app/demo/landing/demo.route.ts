import { Route } from '@angular/router';
import { Index10Component } from './index10/index10.component';
import { Index9Component } from './index9/index9.component';
import { Index8Component } from './index8/index8.component';
import { Index6Component } from './index6/index6.component';
import { Index5Component } from './index5/index5.component';
import { Index4Component } from './index4/index4.component';
import { Index3Component } from './index3/index3.component';
import { Index2Component } from './index2/index2.component';
import { Index1Component } from './index1/index1.component';
import { HomeComponent } from '../../views/pages/home/home.component';

export const DEMO_ROUTE: Route[] = [

  {
    path: 'home',
    component: HomeComponent,
    title: 'Home | Perfictus'
  },

  // legacy demo pages
  {
    path: 'index',
    component: Index1Component,
    title: 'Index 1 | Perfictus'
  },
  {
    path: 'index2',
    component: Index2Component,
    title: 'Index 2 | Perfictus'
  },
  {
    path: 'index3',
    component: Index3Component,
    title: 'Index 3 | Perfictus'
  },
  {
    path: 'index4',
    component: Index4Component,
    title: 'Index 4 | Perfictus'
  },
  {
    path: 'index5',
    component: Index5Component,
    title: 'Index 5 | Perfictus'
  },
  {
    path: 'index6',
    component: Index6Component,
    title: 'Index 6 | Perfictus'
  },

  // 🔁 IMPORTANT: redirect index7 → home
  {
    path: 'index7',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'index8',
    component: Index8Component,
    title: 'Index 8 | Perfictus'
  },
  {
    path: 'index9',
    component: Index9Component,
    title: 'Index 9 | Perfictus'
  },
  {
    path: 'index10',
    component: Index10Component,
    title: 'Index 10 | Perfictus'
  }
];
