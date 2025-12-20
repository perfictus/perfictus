import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeocontactComponent } from './seocontact.component';

describe('SeocontactComponent', () => {
  let component: SeocontactComponent;
  let fixture: ComponentFixture<SeocontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeocontactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeocontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
