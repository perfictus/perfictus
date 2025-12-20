import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service6serviceSectionComponent } from './service6service-section.component';

describe('Service6serviceSectionComponent', () => {
  let component: Service6serviceSectionComponent;
  let fixture: ComponentFixture<Service6serviceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service6serviceSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service6serviceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
