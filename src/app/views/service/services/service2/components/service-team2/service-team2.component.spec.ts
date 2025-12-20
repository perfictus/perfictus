import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTeam2Component } from './service-team2.component';

describe('ServiceTeam2Component', () => {
  let component: ServiceTeam2Component;
  let fixture: ComponentFixture<ServiceTeam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTeam2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTeam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
