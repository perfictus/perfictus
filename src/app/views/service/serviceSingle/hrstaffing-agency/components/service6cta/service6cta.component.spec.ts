import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service6ctaComponent } from './service6cta.component';

describe('Service6ctaComponent', () => {
  let component: Service6ctaComponent;
  let fixture: ComponentFixture<Service6ctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service6ctaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service6ctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
