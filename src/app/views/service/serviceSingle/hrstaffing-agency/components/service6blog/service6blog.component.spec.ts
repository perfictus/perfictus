import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service6blogComponent } from './service6blog.component';

describe('Service6blogComponent', () => {
  let component: Service6blogComponent;
  let fixture: ComponentFixture<Service6blogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service6blogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service6blogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
