import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service7blogComponent } from './service7blog.component';

describe('Service7blogComponent', () => {
  let component: Service7blogComponent;
  let fixture: ComponentFixture<Service7blogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service7blogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service7blogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
