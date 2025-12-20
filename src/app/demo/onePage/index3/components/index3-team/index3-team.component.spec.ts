import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3TeamComponent } from './index3-team.component';

describe('Index3TeamComponent', () => {
  let component: Index3TeamComponent;
  let fixture: ComponentFixture<Index3TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3TeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
