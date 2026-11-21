import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BLOG_AUTHOR, BLOG_POSTS, BlogPost } from '../../../data/blog';
import { BlogCardComponent } from './blog-card.component';
import { ViewBlock, blogImage, readMinutes, toViewBlock } from './blog-utils';

@Component({
  selector: 'app-blog-post',
  imports: [RouterLink, DatePipe, BlogCardComponent],
  templateUrl: './blog-post.component.html',
})
export class BlogPostComponent {
  private route = inject(ActivatedRoute);

  post: BlogPost = BLOG_POSTS.find((p) => p.slug === this.route.snapshot.data['slug']) ?? BLOG_POSTS[0];
  blocks: ViewBlock[] = this.post.content.map(toViewBlock);
  image = blogImage(this.post.slug);
  minutes = readMinutes(this.post);
  author = BLOG_AUTHOR;

  // three other posts: the next ones in the list, wrapping around
  related: BlogPost[] = (() => {
    const i = BLOG_POSTS.indexOf(this.post);
    return [1, 2, 3].map((n) => BLOG_POSTS[(i + n) % BLOG_POSTS.length]);
  })();
}
