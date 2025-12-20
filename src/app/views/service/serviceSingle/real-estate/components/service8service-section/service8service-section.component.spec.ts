import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service8serviceSectionComponent } from './service8service-section.component';

describe('Service8serviceSectionComponent', () => {
  let component: Service8serviceSectionComponent;
  let fixture: ComponentFixture<Service8serviceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service8serviceSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service8serviceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
