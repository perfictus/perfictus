import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service9ContactAreaComponent } from './service9-contact-area.component';

describe('Service9ContactAreaComponent', () => {
  let component: Service9ContactAreaComponent;
  let fixture: ComponentFixture<Service9ContactAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service9ContactAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service9ContactAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
