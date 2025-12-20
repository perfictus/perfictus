import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index10AboutComponent } from './index10-about.component';

describe('Index10AboutComponent', () => {
  let component: Index10AboutComponent;
  let fixture: ComponentFixture<Index10AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index10AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index10AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
