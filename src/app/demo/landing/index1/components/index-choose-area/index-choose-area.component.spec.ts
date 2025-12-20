import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexChooseAreaComponent } from './index-choose-area.component';

describe('IndexChooseAreaComponent', () => {
  let component: IndexChooseAreaComponent;
  let fixture: ComponentFixture<IndexChooseAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexChooseAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexChooseAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
