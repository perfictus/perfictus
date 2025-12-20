import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index2heroComponent } from './index2hero.component';

describe('Index2heroComponent', () => {
  let component: Index2heroComponent;
  let fixture: ComponentFixture<Index2heroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index2heroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index2heroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
