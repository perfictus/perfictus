import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index6HeroComponent } from './index6-hero.component';

describe('Index6HeroComponent', () => {
  let component: Index6HeroComponent;
  let fixture: ComponentFixture<Index6HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index6HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index6HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
