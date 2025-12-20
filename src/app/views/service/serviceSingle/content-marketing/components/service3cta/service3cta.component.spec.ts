import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service3ctaComponent } from './service3cta.component';

describe('Service3ctaComponent', () => {
  let component: Service3ctaComponent;
  let fixture: ComponentFixture<Service3ctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service3ctaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service3ctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
