import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbloutChooseComponent } from './ablout-choose.component';

describe('AbloutChooseComponent', () => {
  let component: AbloutChooseComponent;
  let fixture: ComponentFixture<AbloutChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbloutChooseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbloutChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
