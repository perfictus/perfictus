import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { Error404Component } from './views/pages/error404/error404.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () =>
            import('./views/views.route').then((mod) => mod.VIEWS_ROUTE),
    },
    {
        path: '**',
        component: LayoutComponent,
        children: [{ path: '', component: Error404Component, data: { title: 'Error' } }],
    },

];
