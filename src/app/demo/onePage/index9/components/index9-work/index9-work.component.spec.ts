import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index9WorkComponent } from './index9-work.component';

describe('Index9WorkComponent', () => {
  let component: Index9WorkComponent;
  let fixture: ComponentFixture<Index9WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index9WorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index9WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
