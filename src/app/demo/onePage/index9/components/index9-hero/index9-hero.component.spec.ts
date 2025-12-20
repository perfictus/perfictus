import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index9HeroComponent } from './index9-hero.component';

describe('Index9HeroComponent', () => {
  let component: Index9HeroComponent;
  let fixture: ComponentFixture<Index9HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index9HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index9HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
