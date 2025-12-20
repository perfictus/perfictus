import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index5testiComponent } from './index5testi.component';

describe('Index5testiComponent', () => {
  let component: Index5testiComponent;
  let fixture: ComponentFixture<Index5testiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index5testiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index5testiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
