import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service4blogComponent } from './service4blog.component';

describe('Service4blogComponent', () => {
  let component: Service4blogComponent;
  let fixture: ComponentFixture<Service4blogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service4blogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service4blogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
