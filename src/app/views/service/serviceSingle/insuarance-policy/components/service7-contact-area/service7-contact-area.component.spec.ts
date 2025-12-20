import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service7ContactAreaComponent } from './service7-contact-area.component';

describe('Service7ContactAreaComponent', () => {
  let component: Service7ContactAreaComponent;
  let fixture: ComponentFixture<Service7ContactAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service7ContactAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service7ContactAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
