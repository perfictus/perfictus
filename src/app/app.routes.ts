import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'index7',
        pathMatch: 'full',
    },
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () =>
            import('./views/views.route').then((mod) => mod.VIEWS_ROUTE),
    },
    {
        path: '',
        loadChildren: () => import('./demo/landing/demo.route').then((mod) => mod.DEMO_ROUTE)
    },
    {
        path: '',
        loadChildren: () => import('./demo/onePage/onepage.route').then((mod) => mod.ONE_PAGE_ROUTE)
    },

];
