import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio/portfolio.component";
import { Service1Component } from "./service/services/service1/service1.component";
import { AboutUSComponent } from "./pages/about-us/about-us.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { Error404Component } from "./pages/error404/error404.component";
import { CareersComponent } from "./pages/careers/careers.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { BlogPostComponent } from "./pages/blog/blog-post.component";
import { BLOG_POSTS } from "../data/blog";
import { SEO, blogPostSeo } from "../data/seo";

export const VIEWS_ROUTE: Route[] = [
    // "/" is the home page; "/home" shows the same page and points Google to "/"
    { path: '', pathMatch: 'full', component: HomeComponent, data: SEO.home },
    { path: 'home', component: HomeComponent, data: SEO.home },
    { path: 'index7', redirectTo: '', pathMatch: 'full' },
    { path: 'portfolio', component: PortfolioComponent, data: SEO.portfolio },
    { path: 'service', component: Service1Component, data: SEO.service },
    { path: 'about', component: AboutUSComponent, data: SEO.about },
    { path: 'blog', component: BlogComponent, data: SEO.blog },
    // one static route per post, so every article is pre-rendered as its own page
    ...BLOG_POSTS.map((post): Route => ({
        path: `blog/${post.slug}`,
        component: BlogPostComponent,
        data: { ...blogPostSeo(post), slug: post.slug },
    })),
    { path: 'contact', component: ContactUsComponent, data: SEO.contact },
    { path: 'careers', component: CareersComponent, data: SEO.careers },
    { path: 'error', component: Error404Component, data: SEO.notFound },
];
