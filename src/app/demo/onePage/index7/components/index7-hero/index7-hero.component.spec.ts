import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index7HeroComponent } from './index7-hero.component';

describe('Index7HeroComponent', () => {
  let component: Index7HeroComponent;
  let fixture: ComponentFixture<Index7HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index7HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index7HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
