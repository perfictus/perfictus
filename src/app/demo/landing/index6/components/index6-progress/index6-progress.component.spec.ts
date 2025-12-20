import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index6ProgressComponent } from './index6-progress.component';

describe('Index6ProgressComponent', () => {
  let component: Index6ProgressComponent;
  let fixture: ComponentFixture<Index6ProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index6ProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index6ProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
