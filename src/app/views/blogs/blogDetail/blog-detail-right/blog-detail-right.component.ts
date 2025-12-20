import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { BlogDetaiRightComponent } from "./components/blog-detai-right/blog-detai-right.component";
import { BlogAreaRightComponent } from "./components/blog-area-right/blog-area-right.component";

@Component({
  selector: 'app-blog-detail-right',
  imports: [BreadcrumbComponent, BlogDetaiRightComponent, BlogAreaRightComponent],
  templateUrl: './blog-detail-right.component.html',
  styles: ``
})
export class BlogDetailRightComponent {

}
