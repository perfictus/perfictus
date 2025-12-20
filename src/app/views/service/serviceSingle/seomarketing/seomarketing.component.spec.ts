import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEOMarketingComponent } from './seomarketing.component';

describe('SEOMarketingComponent', () => {
  let component: SEOMarketingComponent;
  let fixture: ComponentFixture<SEOMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SEOMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SEOMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
