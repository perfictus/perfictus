import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service3analysisaAreaComponent } from './service3analysisa-area.component';

describe('Service3analysisaAreaComponent', () => {
  let component: Service3analysisaAreaComponent;
  let fixture: ComponentFixture<Service3analysisaAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service3analysisaAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service3analysisaAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
