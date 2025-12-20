import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service5ctaComponent } from './service5cta.component';

describe('Service5ctaComponent', () => {
  let component: Service5ctaComponent;
  let fixture: ComponentFixture<Service5ctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service5ctaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service5ctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
