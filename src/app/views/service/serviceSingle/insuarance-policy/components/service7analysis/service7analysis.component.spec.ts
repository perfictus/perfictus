import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service7analysisComponent } from './service7analysis.component';

describe('Service7analysisComponent', () => {
  let component: Service7analysisComponent;
  let fixture: ComponentFixture<Service7analysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service7analysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service7analysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
