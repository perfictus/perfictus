import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service6ContactAreaComponent } from './service6-contact-area.component';

describe('Service6ContactAreaComponent', () => {
  let component: Service6ContactAreaComponent;
  let fixture: ComponentFixture<Service6ContactAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service6ContactAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service6ContactAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
