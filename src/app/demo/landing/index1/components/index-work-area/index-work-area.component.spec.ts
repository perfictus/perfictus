import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexWorkAreaComponent } from './index-work-area.component';

describe('IndexWorkAreaComponent', () => {
  let component: IndexWorkAreaComponent;
  let fixture: ComponentFixture<IndexWorkAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexWorkAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexWorkAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
