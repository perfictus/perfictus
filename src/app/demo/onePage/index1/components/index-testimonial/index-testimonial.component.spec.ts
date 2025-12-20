import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTestimonialComponent } from './index-testimonial.component';

describe('IndexTestimonialComponent', () => {
  let component: IndexTestimonialComponent;
  let fixture: ComponentFixture<IndexTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexTestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
