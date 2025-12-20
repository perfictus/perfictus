import { Route } from "@angular/router";
import { Index10Component } from "./index10/index10.component";
import { Index9Component } from "./index9/index9.component";
import { Index8Component } from "./index8/index8.component";
import { Index7Component } from "./index7/index7.component";
import { Index6Component } from "./index6/index6.component";
import { Index5Component } from "./index5/index5.component";
import { Index4Component } from "./index4/index4.component";
import { Index3Component } from "./index3/index3.component";
import { Index2Component } from "./index2/index2.component";
import { Index1Component } from "./index1/index1.component";



export const DEMO_ROUTE: Route[] = [

    {
        path: 'index',
        component: Index1Component,
        data: { title: 'Index ' },
    },
    {
        path: 'index2',
        component: Index2Component,
        data: { title: 'Index 2' },
    },
    {
        path: 'index3',
        component: Index3Component,
        data: { title: 'Index 3' },
    },
    {
        path: 'index4',
        component: Index4Component,
        data: { title: 'Index 4' },
    },
    {
        path: 'index5',
        component: Index5Component,
        data: { title: 'Index 5' },
    }, {
        path: 'index6',
        component: Index6Component,
        data: { title: 'Index 6' },
    },
    {
        path: 'index7',
        component: Index7Component,
        data: { title: 'Index 7' },
    },
    {
        path: 'index8',
        component: Index8Component,
        data: { title: 'Index 8' },
    },
    {
        path: 'index9',
        component: Index9Component,
        data: { title: 'Index 9' },
    },
    {
        path: 'index10',
        component: Index10Component,
        data: { title: 'Index 10' },
    },
]