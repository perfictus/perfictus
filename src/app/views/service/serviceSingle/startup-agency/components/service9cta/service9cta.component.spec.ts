import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service9ctaComponent } from './service9cta.component';

describe('Service9ctaComponent', () => {
  let component: Service9ctaComponent;
  let fixture: ComponentFixture<Service9ctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service9ctaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service9ctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
