import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service3ContactAreaComponent } from './service3-contact-area.component';

describe('Service3ContactAreaComponent', () => {
  let component: Service3ContactAreaComponent;
  let fixture: ComponentFixture<Service3ContactAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service3ContactAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service3ContactAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
