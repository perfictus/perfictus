import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3WorkComponent } from './index3-work.component';

describe('Index3WorkComponent', () => {
  let component: Index3WorkComponent;
  let fixture: ComponentFixture<Index3WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3WorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
