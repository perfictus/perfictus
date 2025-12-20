import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index8TeamAreaComponent } from './index8-team-area.component';

describe('Index8TeamAreaComponent', () => {
  let component: Index8TeamAreaComponent;
  let fixture: ComponentFixture<Index8TeamAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index8TeamAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index8TeamAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
