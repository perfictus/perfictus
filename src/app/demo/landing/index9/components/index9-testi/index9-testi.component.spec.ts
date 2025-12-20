import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index9TestiComponent } from './index9-testi.component';

describe('Index9TestiComponent', () => {
  let component: Index9TestiComponent;
  let fixture: ComponentFixture<Index9TestiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index9TestiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index9TestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
