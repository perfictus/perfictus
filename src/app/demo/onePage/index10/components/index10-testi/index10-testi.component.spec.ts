import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index10TestiComponent } from './index10-testi.component';

describe('Index10TestiComponent', () => {
  let component: Index10TestiComponent;
  let fixture: ComponentFixture<Index10TestiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index10TestiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index10TestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
