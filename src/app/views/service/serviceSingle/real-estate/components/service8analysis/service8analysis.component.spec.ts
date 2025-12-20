import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service8analysisComponent } from './service8analysis.component';

describe('Service8analysisComponent', () => {
  let component: Service8analysisComponent;
  let fixture: ComponentFixture<Service8analysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service8analysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service8analysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
