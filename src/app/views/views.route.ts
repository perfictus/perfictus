import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio/portfolio.component";
import { Service1Component } from "./service/services/service1/service1.component";
import { AboutUSComponent } from "./pages/about-us/about-us.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { Error404Component } from "./pages/error404/error404.component";
import { CareersComponent } from "./pages/careers/careers.component";

export const VIEWS_ROUTE: Route[] = [
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home' },
    },
    {
        path: 'index7',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'portfolio',
        component: PortfolioComponent,
        data: { title: 'Portfolio' },
    },
    {
        path: 'service',
        component: Service1Component,
        data: { title: 'Service' },
    },
    {
        path: 'about',
        component: AboutUSComponent,
        data: { title: 'About' },
    },
    {
        path: 'contact',
        component: ContactUsComponent,
        data: { title: 'Contact' },
    },
    {
        path: 'error',
        component: Error404Component,
        data: { title: 'Error' },
    },
    {
        path: 'careers',
        component: CareersComponent,
        data: { title: 'Careers' },
    }
]
