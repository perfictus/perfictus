import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupAgencyComponent } from './startup-agency.component';

describe('StartupAgencyComponent', () => {
  let component: StartupAgencyComponent;
  let fixture: ComponentFixture<StartupAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartupAgencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartupAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
