import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index7TestiComponent } from './index7-testi.component';

describe('Index7TestiComponent', () => {
  let component: Index7TestiComponent;
  let fixture: ComponentFixture<Index7TestiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index7TestiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index7TestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
