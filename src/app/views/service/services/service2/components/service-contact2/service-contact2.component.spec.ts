import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceContact2Component } from './service-contact2.component';

describe('ServiceContact2Component', () => {
  let component: ServiceContact2Component;
  let fixture: ComponentFixture<ServiceContact2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceContact2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceContact2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
