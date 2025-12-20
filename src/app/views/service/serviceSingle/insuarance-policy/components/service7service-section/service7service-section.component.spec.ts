import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service7serviceSectionComponent } from './service7service-section.component';

describe('Service7serviceSectionComponent', () => {
  let component: Service7serviceSectionComponent;
  let fixture: ComponentFixture<Service7serviceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service7serviceSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service7serviceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
