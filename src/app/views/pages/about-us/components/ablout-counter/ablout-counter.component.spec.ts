import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbloutCounterComponent } from './ablout-counter.component';

describe('AbloutCounterComponent', () => {
  let component: AbloutCounterComponent;
  let fixture: ComponentFixture<AbloutCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbloutCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbloutCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
