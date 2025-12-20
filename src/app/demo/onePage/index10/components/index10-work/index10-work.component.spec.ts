import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index10WorkComponent } from './index10-work.component';

describe('Index10WorkComponent', () => {
  let component: Index10WorkComponent;
  let fixture: ComponentFixture<Index10WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index10WorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index10WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
