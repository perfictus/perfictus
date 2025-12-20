import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index6TeamComponent } from './index6-team.component';

describe('Index6TeamComponent', () => {
  let component: Index6TeamComponent;
  let fixture: ComponentFixture<Index6TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index6TeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index6TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
