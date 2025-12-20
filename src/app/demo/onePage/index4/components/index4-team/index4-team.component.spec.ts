import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index4TeamComponent } from './index4-team.component';

describe('Index4TeamComponent', () => {
  let component: Index4TeamComponent;
  let fixture: ComponentFixture<Index4TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index4TeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index4TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
