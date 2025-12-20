import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index9AboutComponent } from './index9-about.component';

describe('Index9AboutComponent', () => {
  let component: Index9AboutComponent;
  let fixture: ComponentFixture<Index9AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index9AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index9AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
