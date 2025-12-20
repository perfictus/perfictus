import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index10HeroComponent } from './index10-hero.component';

describe('Index10HeroComponent', () => {
  let component: Index10HeroComponent;
  let fixture: ComponentFixture<Index10HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index10HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index10HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
