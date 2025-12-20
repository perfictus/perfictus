import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index7ChooseComponent } from './index7-choose.component';

describe('Index7ChooseComponent', () => {
  let component: Index7ChooseComponent;
  let fixture: ComponentFixture<Index7ChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index7ChooseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index7ChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
