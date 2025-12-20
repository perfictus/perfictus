import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index4HeroComponent } from './index4-hero.component';

describe('Index4HeroComponent', () => {
  let component: Index4HeroComponent;
  let fixture: ComponentFixture<Index4HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index4HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index4HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
