import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAreaLeftComponent } from './blog-area-left.component';

describe('BlogAreaLeftComponent', () => {
  let component: BlogAreaLeftComponent;
  let fixture: ComponentFixture<BlogAreaLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAreaLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogAreaLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
