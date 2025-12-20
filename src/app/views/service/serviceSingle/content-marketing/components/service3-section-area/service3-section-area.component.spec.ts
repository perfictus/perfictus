import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service3SectionAreaComponent } from './service3-section-area.component';

describe('Service3SectionAreaComponent', () => {
  let component: Service3SectionAreaComponent;
  let fixture: ComponentFixture<Service3SectionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service3SectionAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service3SectionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
