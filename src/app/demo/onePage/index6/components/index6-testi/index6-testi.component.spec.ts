import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index6TestiComponent } from './index6-testi.component';

describe('Index6TestiComponent', () => {
  let component: Index6TestiComponent;
  let fixture: ComponentFixture<Index6TestiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index6TestiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index6TestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
