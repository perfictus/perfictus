import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index8HeroComponent } from './index8-hero.component';

describe('Index8HeroComponent', () => {
  let component: Index8HeroComponent;
  let fixture: ComponentFixture<Index8HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index8HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index8HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
