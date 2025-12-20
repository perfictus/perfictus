import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index2testimonialComponent } from './index2testimonial.component';

describe('Index2testimonialComponent', () => {
  let component: Index2testimonialComponent;
  let fixture: ComponentFixture<Index2testimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index2testimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index2testimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
