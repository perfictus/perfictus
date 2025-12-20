import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service9blogComponent } from './service9blog.component';

describe('Service9blogComponent', () => {
  let component: Service9blogComponent;
  let fixture: ComponentFixture<Service9blogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service9blogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service9blogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
