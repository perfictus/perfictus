import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index9ChooseComponent } from './index9-choose.component';

describe('Index9ChooseComponent', () => {
  let component: Index9ChooseComponent;
  let fixture: ComponentFixture<Index9ChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index9ChooseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index9ChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
