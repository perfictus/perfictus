import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service6analysisComponent } from './service6analysis.component';

describe('Service6analysisComponent', () => {
  let component: Service6analysisComponent;
  let fixture: ComponentFixture<Service6analysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service6analysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service6analysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
