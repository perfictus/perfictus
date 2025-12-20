import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service5serviceSectionComponent } from './service5service-section.component';

describe('Service5serviceSectionComponent', () => {
  let component: Service5serviceSectionComponent;
  let fixture: ComponentFixture<Service5serviceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service5serviceSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service5serviceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
