import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service9serviceSectionComponent } from './service9service-section.component';

describe('Service9serviceSectionComponent', () => {
  let component: Service9serviceSectionComponent;
  let fixture: ComponentFixture<Service9serviceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service9serviceSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service9serviceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
