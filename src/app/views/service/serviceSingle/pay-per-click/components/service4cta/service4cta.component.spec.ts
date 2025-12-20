import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service4ctaComponent } from './service4cta.component';

describe('Service4ctaComponent', () => {
  let component: Service4ctaComponent;
  let fixture: ComponentFixture<Service4ctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service4ctaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service4ctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
