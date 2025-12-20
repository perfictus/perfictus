import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index7TeamAreaComponent } from './index7-team-area.component';

describe('Index7TeamAreaComponent', () => {
  let component: Index7TeamAreaComponent;
  let fixture: ComponentFixture<Index7TeamAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index7TeamAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index7TeamAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
