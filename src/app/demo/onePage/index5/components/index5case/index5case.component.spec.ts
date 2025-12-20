import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index5caseComponent } from './index5case.component';

describe('Index5caseComponent', () => {
  let component: Index5caseComponent;
  let fixture: ComponentFixture<Index5caseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index5caseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index5caseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
