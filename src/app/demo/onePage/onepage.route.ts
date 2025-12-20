import { Route } from "@angular/router";
import { Index1Component } from "./index1/index1.component";
import { Index2Component } from "./index2/index2.component";
import { Index3Component } from "./index3/index3.component";
import { Index4Component } from "./index4/index4.component";
import { Index5Component } from "./index5/index5.component";
import { Index6Component } from "./index6/index6.component";
import { Index7Component } from "./index7/index7.component";
import { Index8Component } from "./index8/index8.component";
import { Index9Component } from "./index9/index9.component";
import { Index10Component } from "./index10/index10.component";




export const ONE_PAGE_ROUTE: Route[] = [

    {
        path: 'single-index1',
        component: Index1Component,
        data: { title: 'Single Index 1' },
    },
    {
        path: 'single-index2',
        component: Index2Component,
        data: { title: 'Single Index 2' },
    },
    {
        path: 'single-index3',
        component: Index3Component,
        data: { title: 'Single Index 3' },
    },
    {
        path: 'single-index4',
        component: Index4Component,
        data: { title: 'Single Index 4' },
    },
    {
        path: 'single-index5',
        component: Index5Component,
        data: { title: 'Single Index 5' },
    }, {
        path: 'single-index6',
        component: Index6Component,
        data: { title: 'Single Index 6' },
    },
    {
        path: 'single-index7',
        component: Index7Component,
        data: { title: 'Single Index 7' },
    },
    {
        path: 'single-index8',
        component: Index8Component,
        data: { title: 'Single Index 8' },
    },
    {
        path: 'single-index9',
        component: Index9Component,
        data: { title: 'Single Index 9' },
    },
    {
        path: 'single-index10',
        component: Index10Component,
        data: { title: 'Single Index 10' },
    },
]