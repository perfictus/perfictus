import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { BlogContentComponent } from "./components/blog-content/blog-content.component";
import { BlogAreaContentComponent } from "./components/blog-area-content/blog-area-content.component";

@Component({
  selector: 'app-blog-detail',
  imports: [BreadcrumbComponent, BlogContentComponent, BlogAreaContentComponent],
  templateUrl: './blog-detail.component.html',
  styles: ``
})
export class BlogDetailComponent {

}
