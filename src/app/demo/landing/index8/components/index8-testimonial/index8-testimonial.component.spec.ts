import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index8TestimonialComponent } from './index8-testimonial.component';

describe('Index8TestimonialComponent', () => {
  let component: Index8TestimonialComponent;
  let fixture: ComponentFixture<Index8TestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index8TestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index8TestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
