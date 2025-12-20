import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service8ctaComponent } from './service8cta.component';

describe('Service8ctaComponent', () => {
  let component: Service8ctaComponent;
  let fixture: ComponentFixture<Service8ctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service8ctaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service8ctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
