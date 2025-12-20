import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index6AboutComponent } from './index6-about.component';

describe('Index6AboutComponent', () => {
  let component: Index6AboutComponent;
  let fixture: ComponentFixture<Index6AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index6AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index6AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
