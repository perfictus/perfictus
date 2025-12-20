import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMarketingComponent } from './social-marketing.component';

describe('SocialMarketingComponent', () => {
  let component: SocialMarketingComponent;
  let fixture: ComponentFixture<SocialMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
