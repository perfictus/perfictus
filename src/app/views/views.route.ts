import { Route } from "@angular/router";
import { PortfolioComponent } from "./portfolio/portfolio/portfolio.component";
import { PortfolioDetailComponent } from "./portfolio/portfolio-detail/portfolio-detail.component";
import { Service1Component } from "./service/services/service1/service1.component";
import { Service2Component } from "./service/services/service2/service2.component";
import { SEOMarketingComponent } from "./service/serviceSingle/seomarketing/seomarketing.component";
import { SocialMarketingComponent } from "./service/serviceSingle/social-marketing/social-marketing.component";
import { ContentMarketingComponent } from "./service/serviceSingle/content-marketing/content-marketing.component";
import { PayPerClickComponent } from "./service/serviceSingle/pay-per-click/pay-per-click.component";
import { TravelGuideComponent } from "./service/serviceSingle/travel-guide/travel-guide.component";
import { HRStaffingAgencyComponent } from "./service/serviceSingle/hrstaffing-agency/hrstaffing-agency.component";
import { InsuarancePolicyComponent } from "./service/serviceSingle/insuarance-policy/insuarance-policy.component";
import { RealEstateComponent } from "./service/serviceSingle/real-estate/real-estate.component";
import { StartupAgencyComponent } from "./service/serviceSingle/startup-agency/startup-agency.component";
import { AboutUSComponent } from "./pages/about-us/about-us.component";
import { OurTeamComponent } from "./pages/our-team/our-team.component";
import { TestimonialComponent } from "./pages/testimonial/testimonial.component";
import { FAQComponent } from "./pages/faq/faq.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { Error404Component } from "./pages/error404/error404.component";
import { Blog1Component } from "./blogs/ourBlog/blog1/blog1.component";
import { Blog2Component } from "./blogs/ourBlog/blog2/blog2.component";
import { BlogDetailLeftComponent } from "./blogs/blogDetail/blog-detail-left/blog-detail-left.component";
import { BlogDetailRightComponent } from "./blogs/blogDetail/blog-detail-right/blog-detail-right.component";
import { BlogDetailComponent } from "./blogs/blogDetail/blog-detail/blog-detail.component";
import { PricingComponent } from "./pages/Pricing/pricing.component";
import { CareersComponent } from "./pages/careers/careers.component";

export const VIEWS_ROUTE: Route[] = [
    {
        path: 'portfolio',
        component: PortfolioComponent,
        data: { title: 'Portfolio' },
    },
    {
        path: 'portfolio-details',
        component: PortfolioDetailComponent,
        data: { title: 'Portfolio Details' },
    },
    {
        path: 'service',
        component: Service1Component,
        data: { title: 'Service' },
    },
    {
        path: 'service2',
        component: Service2Component,
        data: { title: 'Service' },
    },
    {
        path: 'service-details1',
        component: SEOMarketingComponent,
        data: { title: 'Service Detail' },
    },
    {
        path: 'service-details2',
        component: SocialMarketingComponent,
        data: { title: 'Service Detail' },
    },

    {
        path: 'service-details3',
        component: ContentMarketingComponent,
        data: { title: 'Service Detail' },
    },
    {
        path: 'service-details4',
        component: PayPerClickComponent,
        data: { title: 'Service Detail' },
    },
    {
        path: 'service-details5',
        component: TravelGuideComponent,
        data: { title: 'Service Detail' },
    },
    {
        path: 'service-details6',
        component: HRStaffingAgencyComponent,
        data: { title: 'Service Detail' },
    },
    {
        path: 'service-details7',
        component: InsuarancePolicyComponent
    },
    {
        path: 'service-details8',
        component: RealEstateComponent,
        data: { title: 'Service Detail' },
    },

    {
        path: 'service-details9',
        component: StartupAgencyComponent,
        data: { title: 'Service Detail' },
    },
    {
        path: 'about',
        component: AboutUSComponent,
        data: { title: 'About' },
    },
    {
        path: 'team',
        component: OurTeamComponent,
        data: { title: 'Team' },
    },
    {
        path: 'testimonial',
        component: TestimonialComponent,
        data: { title: 'Testimonial' },
    },

    {
        path: 'faq',
        component: FAQComponent,
        data: { title: 'FAQ' },
    },
    {
        path: 'pricing',
        component: PricingComponent,
        data: { title: 'Pricing' },
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
        path: 'blog',
        component: Blog1Component,
        data: { title: 'Blog 1' },
    },
    {
        path: 'blog2',
        component: Blog2Component,
        data: { title: 'Blog 2' },
    },
    {
        path: 'blog-details-left',
        component: BlogDetailLeftComponent,
        data: { title: 'Blog Detail Left' },
    },

    {
        path: 'blog-details-right',
        component: BlogDetailRightComponent,
        data: { title: 'Blog Detail Right' },
    },
    {
        path: 'blog-details',
        component: BlogDetailComponent,
        data: { title: 'BLog Detail' },
    },
    {
        path: 'careers',
        component: CareersComponent,
        data: { title: 'Careers' },
    },
]