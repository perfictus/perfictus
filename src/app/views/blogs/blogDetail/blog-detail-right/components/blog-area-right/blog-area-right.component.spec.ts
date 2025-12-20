import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAreaRightComponent } from './blog-area-right.component';

describe('BlogAreaRightComponent', () => {
  let component: BlogAreaRightComponent;
  let fixture: ComponentFixture<BlogAreaRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAreaRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogAreaRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
