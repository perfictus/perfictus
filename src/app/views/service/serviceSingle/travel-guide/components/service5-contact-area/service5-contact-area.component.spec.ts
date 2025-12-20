import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service5ContactAreaComponent } from './service5-contact-area.component';

describe('Service5ContactAreaComponent', () => {
  let component: Service5ContactAreaComponent;
  let fixture: ComponentFixture<Service5ContactAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service5ContactAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service5ContactAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
