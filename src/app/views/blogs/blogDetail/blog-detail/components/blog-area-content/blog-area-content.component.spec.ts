import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAreaContentComponent } from './blog-area-content.component';

describe('BlogAreaContentComponent', () => {
  let component: BlogAreaContentComponent;
  let fixture: ComponentFixture<BlogAreaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAreaContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogAreaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
