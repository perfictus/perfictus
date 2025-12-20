import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index2footer2Component } from './index2footer2.component';

describe('Index2footer2Component', () => {
  let component: Index2footer2Component;
  let fixture: ComponentFixture<Index2footer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index2footer2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index2footer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
