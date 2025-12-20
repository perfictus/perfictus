import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMobileMenuComponent } from './landing-mobile-menu.component';

describe('LandingMobileMenuComponent', () => {
  let component: LandingMobileMenuComponent;
  let fixture: ComponentFixture<LandingMobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingMobileMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
