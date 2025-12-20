import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCounter2Component } from './service-counter2.component';

describe('ServiceCounter2Component', () => {
  let component: ServiceCounter2Component;
  let fixture: ComponentFixture<ServiceCounter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCounter2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCounter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
