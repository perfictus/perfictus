import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service7ctaComponent } from './service7cta.component';

describe('Service7ctaComponent', () => {
  let component: Service7ctaComponent;
  let fixture: ComponentFixture<Service7ctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service7ctaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service7ctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
