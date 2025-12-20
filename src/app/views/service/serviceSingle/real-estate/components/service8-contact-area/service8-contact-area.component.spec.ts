import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service8ContactAreaComponent } from './service8-contact-area.component';

describe('Service8ContactAreaComponent', () => {
  let component: Service8ContactAreaComponent;
  let fixture: ComponentFixture<Service8ContactAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service8ContactAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service8ContactAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
