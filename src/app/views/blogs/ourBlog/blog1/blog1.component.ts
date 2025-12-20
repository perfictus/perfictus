import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../components/breadcrumb/breadcrumb.component";
import { blogs } from '../data';
import { CommonModule, IMAGE_CONFIG } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog1',
  imports: [BreadcrumbComponent, CommonModule,RouterLink],
  templateUrl: './blog1.component.html',
  styles: ``,
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true
      }
    },
  ],
})
export class Blog1Component {
  blogsData = blogs;



}
