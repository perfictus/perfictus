import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRStaffingAgencyComponent } from './hrstaffing-agency.component';

describe('HRStaffingAgencyComponent', () => {
  let component: HRStaffingAgencyComponent;
  let fixture: ComponentFixture<HRStaffingAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HRStaffingAgencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRStaffingAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
