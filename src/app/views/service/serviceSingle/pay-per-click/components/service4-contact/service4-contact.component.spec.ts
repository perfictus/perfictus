import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service4ContactComponent } from './service4-contact.component';

describe('Service4ContactComponent', () => {
  let component: Service4ContactComponent;
  let fixture: ComponentFixture<Service4ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service4ContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service4ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
