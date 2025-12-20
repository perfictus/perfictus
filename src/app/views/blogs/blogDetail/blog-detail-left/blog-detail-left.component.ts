import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { BlogAreaLeftComponent } from "./components/blog-area-left/blog-area-left.component";
import { BlogdetailLeftComponent } from "./components/blogdetail-left/blogdetail-left.component";

@Component({
  selector: 'app-blog-detail-left',
  imports: [BreadcrumbComponent, BlogAreaLeftComponent, BlogdetailLeftComponent],
  templateUrl: './blog-detail-left.component.html',
  styles: ``
})
export class BlogDetailLeftComponent {

}
