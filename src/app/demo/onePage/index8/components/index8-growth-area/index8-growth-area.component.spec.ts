import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index8GrowthAreaComponent } from './index8-growth-area.component';

describe('Index8GrowthAreaComponent', () => {
  let component: Index8GrowthAreaComponent;
  let fixture: ComponentFixture<Index8GrowthAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index8GrowthAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index8GrowthAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
