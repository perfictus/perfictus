import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index7AboutComponent } from './index7-about.component';

describe('Index7AboutComponent', () => {
  let component: Index7AboutComponent;
  let fixture: ComponentFixture<Index7AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index7AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index7AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
