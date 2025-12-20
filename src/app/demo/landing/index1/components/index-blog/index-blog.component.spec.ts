import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBlogComponent } from './index-blog.component';

describe('IndexBlogComponent', () => {
  let component: IndexBlogComponent;
  let fixture: ComponentFixture<IndexBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
