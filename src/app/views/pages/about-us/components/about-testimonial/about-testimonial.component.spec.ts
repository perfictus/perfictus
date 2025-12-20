import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTestimonialComponent } from './about-testimonial.component';

describe('AboutTestimonialComponent', () => {
  let component: AboutTestimonialComponent;
  let fixture: ComponentFixture<AboutTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
