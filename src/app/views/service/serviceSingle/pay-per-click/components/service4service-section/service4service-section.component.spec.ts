import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service4serviceSectionComponent } from './service4service-section.component';

describe('Service4serviceSectionComponent', () => {
  let component: Service4serviceSectionComponent;
  let fixture: ComponentFixture<Service4serviceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service4serviceSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service4serviceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
