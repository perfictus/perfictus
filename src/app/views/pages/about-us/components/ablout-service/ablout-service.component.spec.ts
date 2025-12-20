import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbloutServiceComponent } from './ablout-service.component';

describe('AbloutServiceComponent', () => {
  let component: AbloutServiceComponent;
  let fixture: ComponentFixture<AbloutServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbloutServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbloutServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
