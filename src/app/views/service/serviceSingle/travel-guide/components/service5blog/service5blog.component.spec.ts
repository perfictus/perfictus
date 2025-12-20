import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service5blogComponent } from './service5blog.component';

describe('Service5blogComponent', () => {
  let component: Service5blogComponent;
  let fixture: ComponentFixture<Service5blogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service5blogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service5blogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
