import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service4analysisComponent } from './service4analysis.component';

describe('Service4analysisComponent', () => {
  let component: Service4analysisComponent;
  let fixture: ComponentFixture<Service4analysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service4analysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service4analysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
