import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index5servicesComponent } from './index5services.component';

describe('Index5servicesComponent', () => {
  let component: Index5servicesComponent;
  let fixture: ComponentFixture<Index5servicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index5servicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index5servicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
