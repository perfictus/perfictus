import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index5chooseComponent } from './index5choose.component';

describe('Index5chooseComponent', () => {
  let component: Index5chooseComponent;
  let fixture: ComponentFixture<Index5chooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index5chooseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index5chooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
