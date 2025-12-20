import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service5analysisComponent } from './service5analysis.component';

describe('Service5analysisComponent', () => {
  let component: Service5analysisComponent;
  let fixture: ComponentFixture<Service5analysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service5analysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service5analysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
