import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service9analysisComponent } from './service9analysis.component';

describe('Service9analysisComponent', () => {
  let component: Service9analysisComponent;
  let fixture: ComponentFixture<Service9analysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service9analysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service9analysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
