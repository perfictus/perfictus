import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service8blogComponent } from './service8blog.component';

describe('Service8blogComponent', () => {
  let component: Service8blogComponent;
  let fixture: ComponentFixture<Service8blogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service8blogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service8blogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
