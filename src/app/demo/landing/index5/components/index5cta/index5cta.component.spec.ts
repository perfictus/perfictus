import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index5ctaComponent } from './index5cta.component';

describe('Index5ctaComponent', () => {
  let component: Index5ctaComponent;
  let fixture: ComponentFixture<Index5ctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index5ctaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index5ctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
