import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index5blogComponent } from './index5blog.component';

describe('Index5blogComponent', () => {
  let component: Index5blogComponent;
  let fixture: ComponentFixture<Index5blogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index5blogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index5blogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
