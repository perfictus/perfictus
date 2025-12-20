import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index4TestimonialComponent } from './index4-testimonial.component';

describe('Index4TestimonialComponent', () => {
  let component: Index4TestimonialComponent;
  let fixture: ComponentFixture<Index4TestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index4TestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index4TestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
