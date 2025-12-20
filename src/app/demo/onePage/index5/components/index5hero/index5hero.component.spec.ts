import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index5heroComponent } from './index5hero.component';

describe('Index5heroComponent', () => {
  let component: Index5heroComponent;
  let fixture: ComponentFixture<Index5heroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index5heroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index5heroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
